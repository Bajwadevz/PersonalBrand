// Run against a local production build. Install Playwright or pass PLAYWRIGHT_PATH.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { default: { chromium } } = await import(require.resolve(process.env.PLAYWRIGHT_PATH || 'playwright'));

const origin = new URL(process.argv[2] || 'http://localhost:3000');
assert(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local server');
const canonical = 'https://bajwaa.dev';
const routes = ['/', '/ai-implementation', '/ai-operations-audit', '/how-it-works', '/work', '/about',
  '/contact', '/ai-implementation-perth', '/solutions/crm-automation',
  '/solutions/business-process-automation', '/blog', '/privacy', '/terms'];
const errors = [];
const results = { pages: [], screenshots: [], links: 0, journey: [], errors };

function check(ok, message) {
  if (!ok) errors.push(message);
}

async function waitForPaint(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function verifyPages(page) {
  const links = new Set();
  const titles = new Set();
  const descriptions = new Set();
  for (const route of routes) {
    const response = await page.goto(new URL(route, origin).href);
    check(response.status() === 200, route + ' HTTP ' + response.status());
    const data = await page.evaluate(() => {
      const content = (selector) => document.querySelector(selector)?.content;
      const canonicalUrls = [...document.querySelectorAll('link[rel="canonical"]')].map(element => element.href);
      const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent));
      return {
        title: document.title, description: content('meta[name="description"]'), canonicalUrls,
        headings: [...document.querySelectorAll('h1')].map(node => node.textContent.trim()),
        robots: content('meta[name="robots"]'), ogTitle: content('meta[property="og:title"]'),
        ogImage: content('meta[property="og:image"]'), ogUrl: content('meta[property="og:url"]'),
        twitterCard: content('meta[name="twitter:card"]'), twitterImage: content('meta[name="twitter:image"]'),
        schemas: JSON.stringify(schemas),
        links: [...document.links].map(link => link.href)
      };
    });
    const expected = new URL(route, canonical).href;
    check(data.title && !titles.has(data.title), route + ' missing/duplicate title');
    titles.add(data.title);
    check(data.description && !descriptions.has(data.description), route + ' missing/duplicate description');
    descriptions.add(data.description);
    check(data.canonicalUrls.length === 1 && new URL(data.canonicalUrls[0]).href === expected, route + ' canonical');
    check(data.headings.length === 1 && data.headings[0].length, route + ' H1');
    check(data.ogTitle && data.ogImage && data.ogUrl && new URL(data.ogUrl).href === expected, route + ' Open Graph');
    check(data.twitterCard && data.twitterImage, route + ' Twitter card');
    if (!['/privacy', '/terms'].includes(route)) check(!String(data.robots).includes('noindex'), route + ' noindex');
    check(!/AggregateRating|LocalBusiness/.test(data.schemas), route + ' unsupported local or rating schema');
    for (const link of data.links) {
      const url = new URL(link);
      if ([origin.origin, canonical].includes(url.origin)) links.add(url.pathname);
    }
    delete data.schemas;
    delete data.links;
    results.pages.push({ route, ...data });
  }
  for (const link of links) {
    const response = await page.request.get(new URL(link, origin).href);
    check(response.status() < 400, link + ' internal link HTTP ' + response.status());
    await response.dispose();
  }
  results.links = links.size;
}

async function verifyInsights(page) {
  const sitemap = await page.request.get(new URL('/sitemap.xml', origin).href);
  const xml = await sitemap.text();
  const paths = [...xml.matchAll(/<loc>https:\/\/bajwaa.dev(\/blog\/[^<]+)<\/loc>/g)].map(match => match[1]);
  await page.goto(new URL('/blog', origin).href);
  const published = await page.locator('main a.insights-card').evaluateAll(links => links.map(link => new URL(link.href).pathname));
  check(paths.length === published.length && paths.every(path => published.includes(path)), 'Insights index must link to each canonical article');
  await page.getByRole('button', { name: 'Sales', exact: true }).click();
  check(await page.locator('main a.insights-card').count() < published.length, 'Insights topic filter');
  await page.getByRole('button', { name: 'All', exact: true }).click();
  check(await page.locator('main a.insights-card').count() === published.length, 'Insights All filter restores archive');
  results.insights = { articles: published.length, filter: 'Passed' };
}

async function verifyJourney(page) {
  for (const route of ['/', '/how-it-works']) {
    await page.goto(new URL(route, origin).href);
    const steps = page.locator('.process-grid > li');
    await steps.first().waitFor();
    const labels = await steps.getByRole('heading').allTextContents();
    check(labels.join(',') === 'Discover,Audit,Implement,Support', route + ' process stages');
    const prices = await steps.locator('.process-price').allTextContents();
    check(prices.join(',') === 'Free,A$750,From A$3,500,From A$490/month', route + ' published price labels');
    const call = page.locator('.process-actions').getByRole('link', { name: 'Book a Free Discovery Call' });
    check(await call.getAttribute('href') === '/contact', route + ' process CTA');
    check(await steps.first().evaluate(card => getComputedStyle(card).animationName) === 'none', route + ' reduced-motion process');
    results.journey.push({route, stages: labels, prices});
  }
  await page.route('https://www.loom.com/embed/**', route => route.fulfill({body: 'Mock video frame'}));
  await page.goto(new URL('/work', origin).href);
  const frame = page.locator('iframe[title="AI lead response and booking walkthrough"]');
  check(await frame.count() === 0, 'Loom loaded before activation');
  const link = page.getByRole('link', { name: 'Open in Loom' });
  check((await link.getAttribute('href'))?.endsWith('/share/812342319423449b8acaa9c77b7e1ca3'), 'Previous Loom share link');
  await page.getByRole('button', { name: 'Load video' }).press('Enter');
  await frame.waitFor();
  check((await frame.getAttribute('src'))?.endsWith('/embed/812342319423449b8acaa9c77b7e1ca3'), 'Previous Loom video embed');
  await frame.contentFrame().getByText('Mock video frame').waitFor();
  await page.unroute('https://www.loom.com/embed/**');
  results.journey.push({route: '/work', video: 'Loom embeds on demand and has a direct link'});
}

async function verifyScreensAndNav(page) {
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({width, height: 900});
    for (const route of routes) {
      await page.goto(new URL(route, origin).href);
      await page.evaluate(() => document.fonts.ready);
      const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      check(pageWidth <= width, route + ' overflows ' + width + 'px viewport by ' + (pageWidth - width));
      if (route === '/') {
        await waitForPaint(page);
        const file = 'after-' + width + '.png';
        await page.screenshot({path: path.join(__dirname, file), animations: 'disabled'});
        results.screenshots.push(file);
        const book = page.locator('header').getByRole('link', {name: 'Book a Free Discovery Call'});
        check(await book.isVisible(), 'Discovery CTA hidden at ' + width + 'px');
        const bounds = await book.boundingBox();
        check(bounds && bounds.x >= 0 && bounds.x + bounds.width <= width + 1,
          'Discovery CTA extends outside the ' + width + 'px viewport');
        if (width === 1440) {
          const proof = page.locator('.blueprint-band');
          const proofFile = 'after-process-1440.png';
          await proof.screenshot({path: path.join(__dirname, proofFile), animations: 'disabled'});
          results.screenshots.push(proofFile);
        }
      }
    }
  }
  await page.goto(origin.href);
  const toggle = page.getByRole('button', {name: 'Menu', exact: true});
  await toggle.focus();
  await page.keyboard.press('Enter');
  const nav = page.getByRole('navigation', {name: 'Main navigation'});
  await nav.getByRole('link', {name: 'What We Do'}).focus();
  await page.keyboard.press('Escape');
  check(await toggle.getAttribute('aria-expanded') === 'false'
    && await toggle.evaluate(button => document.activeElement === button),
  'Escape did not close the mobile menu and restore focus');
  await page.keyboard.press('Enter');
  await nav.getByRole('link', {name: 'What We Do'}).click();
  await page.waitForURL('**/ai-implementation');
  check(await toggle.getAttribute('aria-expanded') === 'false', 'Mobile menu did not close');
  results.mobileMenu = 'Opened with Enter, closed with Escape, restored focus and navigated to What We Do';

  await page.evaluate(() => window.scrollTo(0, 600));
  const top = await page.locator('.agency-header').evaluate(header => header.getBoundingClientRect().top);
  check(top >= 0 && top <= 20, 'Floating navigation did not stay in view on mobile');
}

async function verifyBrandAndTheme(page) {
  results.brand = { darkThemePersists: false, viewports: [] };
  await page.goto(origin.href);
  const grid = page.locator('.perspective-grid');
  check(await grid.isVisible() && await grid.getAttribute('aria-hidden') === 'true',
    'Homepage perspective grid missing or exposed to assistive technology');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', {name: 'Skip to main content'});
  check(await skip.evaluate(link => document.activeElement === link && link.hash === '#main-content'),
    'First keyboard stop is not the skip-to-content link');
  const content = page.locator('.hero-content');
  check(await content.evaluate(element => getComputedStyle(element).opacity !== '0'),
    'Homepage copy is hidden in reduced-motion mode');
  const theme = page.getByRole('button', {name: /colour theme/i});
  await page.waitForFunction(() => getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() === '#ffffff');
  await waitForPaint(page);
  const lightBackground = await page.locator('article.agency').evaluate(element => getComputedStyle(element).backgroundColor);
  await theme.focus();
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.documentElement.classList.contains('dark'));
  await page.reload();
  await page.waitForFunction(() => document.documentElement.classList.contains('dark')
    && getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() === '#0b0f1a');
  await waitForPaint(page);
  results.brand.darkThemePersists = true;
  const darkBackground = await page.locator('article.agency').evaluate(element => getComputedStyle(element).backgroundColor);
  check(lightBackground !== darkBackground, 'Theme setting did not change the homepage canvas');
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({width, height: 900});
    await waitForPaint(page);
    const report = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      headingWidth: document.querySelector('h1').scrollWidth,
      headingBox: document.querySelector('h1').clientWidth,
    }));
    check(report.documentWidth <= width && report.headingWidth <= report.headingBox + 1,
      'Dark homepage or its heading overflows at ' + width + 'px');
    results.brand.viewports.push({width, ...report});
    const file = 'after-dark-' + width + '.png';
    await page.screenshot({path: path.join(__dirname, file), animations: 'disabled'});
    results.screenshots.push(file);
  }
  await theme.click();
  await page.waitForFunction(() => !document.documentElement.classList.contains('dark'));
}

const sampleEnquiry = 'Synthetic browser test for manual status updates.';

async function fillContact(page) {
  await page.getByLabel('Your name').fill('QA Example');
  await page.getByLabel('Work email').fill('qa@example.invalid');
  await page.getByLabel('Company', {exact: true}).fill('Example Test Company');
  await page.getByLabel('Country or region').fill('Australia');
  await page.getByLabel('Approximate team size').selectOption({index: 1});
  const problem = page.getByLabel('Which manual task takes up time?');
  await problem.fill(sampleEnquiry);
  const consent = page.getByRole('checkbox');
  await consent.press('Space');
  check(await consent.isChecked(), 'Keyboard did not select the enquiry consent');
  return problem;
}

async function verifyContact(page) {
  await page.goto(new URL('/contact', origin).href);
  const email = page.locator('main a[href^="mailto:"]').first();
  await email.waitFor({state: 'visible'});
  const href = await email.getAttribute('href');
  check(/^mailto:[^?\s@]+@[^?\s@]+\.[^?\s@]+/i.test(href), 'Contact fallback email');
  const submit = page.getByRole('button', { name: 'Request a discovery call' });
  await submit.click();
  check(!(await page.locator('main form').evaluate(form => form.checkValidity())), 'Empty enquiry passes validation');
  const problem = await fillContact(page);
  let attempts = 0;
  await page.route('**/api/leads', route => {
    attempts++;
    const payload = new URLSearchParams(route.request().postData());
    check(payload.get('problem') === sampleEnquiry && payload.get('consent') === 'yes', 'Submitted form fields');
    return route.fulfill({status: attempts === 1 ? 503 : 201, contentType: 'application/json',
      body: JSON.stringify({state: attempts === 1 ? 'unavailable' : 'saved'})});
  });
  await submit.click();
  await page.getByRole('status').getByText(/couldn’t confirm delivery/).waitFor();
  check(await problem.inputValue() === sampleEnquiry, 'Failure discarded editable values');
  await submit.click();
  await page.getByRole('status').getByText(/Enquiry received/).waitFor();
  check(attempts === 2 && await submit.count() === 0, 'Enquiry retry or confirmation failed');
  results.contact = 'Visible email fallback, empty-form validation, simulated delivery failure and successful retry. Synthetic data intercepted locally.';
}

async function verifyNativeContact(browser) {
  const page = await browser.newPage({javaScriptEnabled: false, reducedMotion: 'reduce', viewport: {width: 390, height: 900}});
  page.setDefaultTimeout(7000);
  try {
    await page.route('**/api/leads', route => {
      const request = route.request();
      check(request.method() === 'POST' && request.headers()['accept']?.includes('text/html'),
        'No-JavaScript enquiry did not use the native HTML form');
      const payload = new URLSearchParams(request.postData());
      check(payload.get('problem') === sampleEnquiry && payload.get('consent') === 'yes',
        'Native form failed to post the enquiry fields');
      return route.fulfill({status: 303, headers: {
        location: '/contact?status=saved#enquiry',
        'set-cookie': 'discovery-receipt=saved; Path=/contact; Max-Age=120; HttpOnly; SameSite=Lax',
      }});
    });
    await page.goto(new URL('/contact?status=saved', origin).href);
    check(await page.locator('main form').isVisible(), 'A stale success URL hid the native enquiry form');
    await page.goto(origin.href);
    await page.locator('.agency-hero a[href="/contact"]').click();
    await page.waitForURL('**/contact');
    await fillContact(page);
    await page.getByRole('button', {name: 'Request a discovery call'}).press('Enter');
    await page.getByRole('status').getByText(/Enquiry received/).waitFor();
    results.nativeContact = 'Homepage CTA and native confirmation worked with JavaScript disabled. Synthetic POST intercepted locally.';
  } finally {
    await page.close();
  }
}

async function verifyAccessibility(page) {
  results.accessibility = [];
  const variants = [[1440, 'light'], [390, 'light'], [1440, 'dark'], [390, 'dark']];
  for (const [width, theme] of variants) {
    await page.setViewportSize({width, height: 900});
    await page.goto(origin.href);
    await page.evaluate(value => localStorage.setItem('theme', value), theme);
    for (const route of ['/', '/ai-implementation', '/work', '/contact', '/blog']) {
      await page.goto(new URL(route, origin).href);
      await page.waitForFunction(dark => document.documentElement.classList.contains('dark') === dark, theme === 'dark');
      await waitForPaint(page);
      const styling = await page.evaluate(() => {
        const root = getComputedStyle(document.documentElement);
        const nav = document.querySelector('#agency-nav a');
        const footer = document.querySelector('.footer-inner a');
        return {ink: root.getPropertyValue('--ink').trim(), navColor: getComputedStyle(nav).color,
          footerColor: getComputedStyle(footer).color};
      });
      await page.addScriptTag({path: require.resolve('axe-core/axe.min.js')});
      const violations = await page.evaluate(async () => {
        const audit = await window.axe.run(document, {runOnly: {type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa']}});
        return audit.violations.map(issue => ({id: issue.id, impact: issue.impact,
          elements: issue.nodes.map(node => node.target), details: issue.nodes[0]?.failureSummary}));
      });
      results.accessibility.push({route, width, theme, styling, violations});
      for (const issue of violations) check(!['critical', 'serious'].includes(issue.impact),
        route + ' ' + width + 'px (' + theme + '): ' + issue.id + ' on ' + issue.elements.join(', '));
    }
  }
}

(async () => {
  const browser = await chromium.launch({channel: process.env.CHROME_CHANNEL || 'chrome'});
  try {
    const page = await browser.newPage({reducedMotion: 'reduce'});
    page.setDefaultTimeout(7000);
    page.on('pageerror', error => errors.push(error.message));
    for (const test of [verifyPages, verifyScreensAndNav, verifyBrandAndTheme, verifyInsights, verifyJourney, verifyContact, verifyAccessibility]) {
      try { await test(page); }
      catch (error) { errors.push(test.name + ': ' + error.message); }
    }
    try { await verifyNativeContact(browser); }
    catch (error) { errors.push('verifyNativeContact: ' + error.message); }
  } finally {
    await browser.close();
    await fs.writeFile(path.join(__dirname, 'browser-results.json'), JSON.stringify(results, null, 2) + '\n');
  }
  console.log(JSON.stringify({pages: results.pages.length, links: results.links, journey: results.journey,
    screenshots: results.screenshots, mobileMenu: results.mobileMenu, brand: results.brand, contact: results.contact,
    nativeContact: results.nativeContact, errors}, null, 2));
  process.exitCode = errors.length ? 1 : 0;
})().catch(error => { console.error(error); process.exitCode = 1; });
