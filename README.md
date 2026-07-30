## NIMS Website

Official website codebase for the NIMS event site, built with Next.js 16, React 19, and OpenNext for Cloudflare deployment.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- OpenNext for Cloudflare
- Wrangler

## Getting Started

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run build:cloudflare
npm run dev:cloudflare
npm run preview
npm run deploy
npm run upload
npm run cf-typegen
```

## Project Structure

- `src/app` - App Router pages
- `src/components` - shared UI and layout components
- `src/data` - page data for speakers, gallery, and programme content
- `public/images` - site images and event assets
- `public/videos` - video assets

## Deployment

This project is configured for Cloudflare deployment through OpenNext.

Build for Cloudflare:

```bash
npm run build:cloudflare
```

Preview locally:

```bash
npm run preview
```

Deploy:

```bash
npm run deploy
```

## Notes

- Playwright MCP artifacts are ignored via `.gitignore`.
- `development` and `main` currently point to the same remote commit.
