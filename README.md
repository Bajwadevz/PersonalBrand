# Bajwa Dev - Personal Website

A minimal, text-focused personal brand website matching the structure and layout of rosewell.dev. Built with Next.js 15 (App Router), Tailwind CSS v4, and Markdown static site generation.

## Features

- **Minimal Typography**: Uses Geist fonts with a clean, whitespace-heavy aesthetic.
- **Static Blog**: Powered by Markdown with static generation (SSG) for high performance and SEO.
- **Responsive**: Fully responsive design for desktop and mobile.
- **Product Placeholder**: Ready for future digital product and Stripe integration.
- **SEO Optimized**: Metadata is configured out-of-the-box for each page.

## Local Development

First, install dependencies:

```bash
npm install
```

### Environment Variables

For the email waitlist feature to work locally or in production, you must set up a Supabase project and provide the following variables in a `.env.local` file at the root of the project:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Make sure your Supabase project has a table named `subscribers` with an `email` column (type: text or varchar) that has a UNIQUE constraint.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing Blog Posts

To add a new blog post, simply create a new markdown file (`.md`) inside the `_posts` directory in the root of the project.

```markdown
---
title: 'Your Post Title'
excerpt: 'A short summary of your post.'
date: '2026-02-20T12:00:00Z'
---

Your content goes here...
```

The site will automatically parse this and generate a statically optimal page at `/blog/your-file-name`.

## Deploying to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new). 

1. Push your code to a GitHub repository.
2. Sign in to Vercel and create a "New Project".
3. Import your GitHub repository.
4. Leave all build settings as default (Framework Preset: Next.js).
5. Click **Deploy**.

Vercel will build the site statically (`next build`) and serve your markdown posts lightning-fast globally. Future pushes to your `main` branch will automatically deploy.
