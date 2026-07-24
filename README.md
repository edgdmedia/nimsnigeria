# NIMS 2026 - National Industrial Manpower Summit

The official website for the National Industrial Manpower Summit (NIMS) 2026, a Presidential initiative dedicated to developing the skilled workforce needed to power Nigeria's industrial future.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (using `@theme` configuration)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) (Static Export via `@cloudflare/next-on-pages`)

## 📂 Project Structure

- `/src/app` - Next.js App Router pages and layouts.
  - `/` (Home)
  - `/about`
  - `/nims-2025` (Speakers & Archive)
  - `/programme`
  - `/gallery`
  - `/sponsors-exhibitors`
  - `/registration`
- `/src/components` - Reusable UI components (SiteNav, SiteFooter, SpeakerCard, Button, etc.)
- `/public` - Static assets, images, and logos used across the site.
- `/docs` - Original design system files, HTML mockups, and architectural documentation.

## 🎨 Design System

This project implements a custom design system specific to the NIMS brand.
- **Fonts**: Primary display font is `Montserrat` (`font-display`), with `Source Sans 3` (`font-sans`) for body text.
- **Colors**: Defined in `src/app/globals.css` utilizing Tailwind v4 `@theme`. Key colors include `brand` (#204027), `brand-deep` (#16301d), and `accent` (#de2222).

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Deployment

This project is configured to deploy to **Cloudflare Pages**. 

It uses `@cloudflare/next-on-pages` and is configured as a static/edge deployment.
- Pushes to the `development` branch trigger a staging preview deployment.
- Merges to the `main` branch trigger the production deployment.

For local Cloudflare testing (Wrangler):
```bash
npm run build
npm run preview
```

## 🤝 Workflow Guidelines

- **Branching**: Development is done on feature branches and pushed to the `development` branch.
- **Releases**: Pull Requests are merged from `development` into `main` for production releases.
