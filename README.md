# MBC Site

A modern landing page for "60 Seconds To Millions" by Richard Oliver Bray - a book focused on helping developers grow their audience with video content.

## Tech Stack

- **Framework**: [Waku](https://waku.gg/) - React-based static site generator
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Bun
- **Deployment**: Cloudflare Workers (configured)
- **Development Tools**: Storybook, Vitest

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mbc-site

# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
# Build for production
bun build

# Start production server
bun start
```

### Storybook

```bash
# Start Storybook development server
bun storybook

# Build Storybook
bun build-storybook
```

## Project Structure

```
src/
├── components/          # React components
│   ├── about.tsx       # Author information section
│   ├── blurb.tsx       # Book description
│   ├── bookimage.tsx   # Book cover display
│   ├── faq.tsx         # Frequently asked questions
│   ├── footer.tsx      # Site footer
│   ├── header.tsx      # Site header
│   ├── hero.tsx        # Landing page hero section
│   ├── navbar.tsx      # Navigation bar
│   ├── signup.tsx      # Email signup form
│   └── testimonials.tsx # Customer testimonials
├── pages/              # Page components
│   ├── _layout.tsx     # Layout wrapper
│   ├── blog.tsx        # Blog page
│   ├── contact.tsx     # Contact page
│   └── index.tsx       # Home page
├── stories/            # Storybook stories
└── styles.css          # Global styles
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site Generation**: Fast loading with Waku SSG
- **Component Library**: Documented with Storybook
- **Type Safety**: Full TypeScript support
- **Modern Tooling**: Bun for fast package management and builds
- **Cloud Ready**: Configured for Cloudflare Workers deployment

## Deployment

The project is configured for deployment on Cloudflare Workers. The `wrangler.json` file contains the necessary configuration.

```bash
# Deploy to Cloudflare Workers (requires Wrangler CLI)
wrangler deploy
```

## Development Guidelines

- Use TypeScript for all new code
- Follow the existing component structure and naming conventions
- Use Tailwind CSS classes instead of inline styles
- Components should be lowercase filenames with PascalCase exports
- Prefer async/await for asynchronous operations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes with `bun dev`
5. Submit a pull request

## License

This project is private and proprietary.