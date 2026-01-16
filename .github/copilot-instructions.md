# Job Board App - AI Coding Guidelines

## Project Overview
This is a Next.js 16 application for a job board, using the App Router architecture. It leverages React 19, Tailwind CSS v4, and modern web standards for building a responsive job listing platform.

## Architecture & Structure
- **App Router**: Uses Next.js App Router with `app/` directory structure
- **Component Organization**: Place components in `app/` subdirectories or create a `components/` folder as the app grows
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Fonts**: Geist Sans and Mono fonts loaded via `next/font/google`

## Key Patterns & Conventions

### Import Paths
Use the `@/*` alias for root-relative imports (configured in `jsconfig.json`):
```javascript
import { Component } from '@/components/Component';
```

### Styling Approach
- Tailwind CSS v4 with `@import "tailwindcss";` in `globals.css`
- Custom theme variables in `:root` for background/foreground colors
- Dark mode support via `prefers-color-scheme` media query
- Example class usage: `className="bg-zinc-50 dark:bg-black text-black dark:text-zinc-50"`

### Font Usage
Fonts are loaded in `app/layout.js` and applied via CSS variables:
```javascript
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
```

### Development Workflow
- **Start dev server**: `npm run dev` (runs `next dev`)
- **Build**: `npm run build` (runs `next build`)
- **Production start**: `npm run start` (runs `next start`)
- **Linting**: `npm run lint` (runs `eslint`)

### Configuration Files
- `next.config.mjs`: Currently minimal, add configurations here for routing, images, etc.
- `eslint.config.mjs`: Uses `eslint-config-next/core-web-vitals` with custom ignores
- `postcss.config.mjs`: Configured for Tailwind CSS v4
- `jsconfig.json`: Path aliases for cleaner imports

## Adding Features
When building job board features (job listings, applications, user profiles):
- Create route segments in `app/` (e.g., `app/jobs/page.js` for `/jobs`)
- Use server components by default, client components only when needed
- Follow Next.js data fetching patterns for job data
- Implement responsive design with Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)

## Deployment
Designed for Vercel deployment, with static optimization and server-side rendering capabilities.