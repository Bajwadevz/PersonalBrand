# Agency website browser verification

The three baseline images capture the previous bajwaa.dev homepage at 1440, 768 and 390 CSS pixels, each 900 pixels tall. The previous site leads with rapid lead response, a free audit and website services. The Agentsy reference informed motion and layout.

## Reproduce the local checks

Start the Next.js production build on localhost. Run the following from the website repository with Playwright and Google Chrome available. The existing development dependencies supply axe-core. If Playwright is installed outside the repository, set PLAYWRIGHT_PATH to its package directory. CHROME_CHANNEL can override the default Chrome channel.

```sh
node docs/agency-qa/verify.mjs http://localhost:3000
```

The script writes light and dark homepage screenshots and a browser-results.json report in this directory. It checks 13 commercial, editorial and policy routes for H1s, metadata, structured-data parsing, internal link responses and horizontal overflow. On the homepage it checks the decorative grid, visible booking CTA, skip link, reduced-motion copy and restored dark theme on reload. It exercises the mobile menu with the keyboard, checks that the floating header stays visible on scroll, checks the four process stages and their prices on both entry points, verifies the discovery links, and opens the Loom embed from the keyboard using an intercepted response.

The contact tests check native validation, a visible email fallback, preservation of typed answers on failure, successful retry and the native HTML form flow with JavaScript disabled. All synthetic submissions are intercepted locally. The accessibility check runs axe against WCAG 2 A/AA and 2.1 A/AA rules on the home, service, work, contact and blog pages in both themes at desktop and mobile widths. Manual keyboard and visual checks complement this coverage. Provider access, live payments, production enquiry delivery and search performance require separate verification.
