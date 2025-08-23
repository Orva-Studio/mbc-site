# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern static site for "60 Seconds To Millions" by Richard Oliver Bray, built with Waku (React-based SSG), TypeScript, and Tailwind CSS. The site is deployed on Cloudflare Workers and uses Bun as the package manager.

## Development Commands

### Core Commands
- `bun dev` - Start development server (available at http://localhost:3000)
- `bun build` - Build for production with Cloudflare Workers support
- `bun start` - Start production server

### Code Quality
- `bun lint` - Run ESLint (uses @typescript-eslint and custom rules)
- TypeScript checking is done via IDE/editor integration (noEmit: true in tsconfig)

### Testing & Documentation
- `bun storybook` - Start Storybook development server
- `bun build-storybook` - Build Storybook for production
- Uses Vitest for testing (configured in devDependencies)

### Deployment
- `wrangler deploy` - Deploy to Cloudflare Workers (requires Wrangler CLI)

## Architecture

### Framework Architecture
- **Waku SSG**: Static site generation with React Server Components support
- **Static Rendering**: All pages use `render: 'static'` configuration
- **Cloudflare Workers**: Custom worker in `src/serve-cloudflare.ts` handles routing and asset serving

### Page Structure
- `src/pages/_layout.tsx` - Global layout with Navbar, Footer, and main wrapper
- `src/pages/index.tsx` - Homepage composed of sequential components
- `src/pages/blog.tsx` - Blog page
- `src/pages/contact.tsx` - Contact page
- Pages use async functions and can fetch data server-side

### Component Organization
- All components in `src/components/` use lowercase filenames with PascalCase exports
- Components are functional React components, many using "use client" directive for interactivity
- Key components: `hero.tsx`, `bookimage.tsx`, `blurb.tsx`, `kitform.tsx`, `faq.tsx`, `navbar.tsx`, `footer.tsx`

### Styling System
- **Tailwind CSS 4.1.8** with PostCSS configuration
- Global styles in `src/styles.css`
- Custom CSS variables (e.g., `--color-orange`) used alongside Tailwind classes
- Mobile-first responsive design approach

## Code Conventions

### TypeScript Configuration
- Strict mode enabled with advanced type checking
- `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` for enhanced safety
- ESModules with bundler resolution
- JSX set to `react-jsx`

### ESLint Rules
- Function declarations preferred over arrow functions (`func-style` rule)
- TypeScript-specific rules enforced
- Custom globals defined for browser and Node.js environments

### Component Patterns
- Async components for pages that may need server-side data
- Client-side interactivity marked with "use client" directive
- Props typed with TypeScript interfaces
- Event handlers use descriptive names (e.g., `scrollToSignup`)

### File Naming
- Components: lowercase filenames (e.g., `hero.tsx`)
- Exports: PascalCase (e.g., `export default Hero`)
- Pages follow Waku conventions with underscore prefixes for special files

## Cloudflare Workers Integration

The project includes a custom Cloudflare Worker (`src/serve-cloudflare.ts`) that:
- Handles static asset serving through ASSETS binding
- Routes to Waku's SSG output
- Includes error handling and caching headers
- Configured via `wrangler.json` for `makebettercontent.dev` domain

## Development Notes

- Uses Bun for package management (configured in packageManager field)
- React 19.1.0 with latest React Server Components support
- Static assets served from `public/images/` directory
- Build output goes to `dist/` directory for Cloudflare Workers deployment