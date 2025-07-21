# Agent Guidelines for MBC Site

## Build Commands
- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- No lint/test commands configured - TypeScript checking via `tsc --noEmit`

## Project Structure
- Waku (React SSG framework) + TypeScript + Tailwind CSS
- Components in `src/components/` (lowercase filenames)
- Pages in `src/pages/` with async functions and `getConfig` exports
- Strict TypeScript config with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`

## Code Style
- Use double quotes for strings, semicolons required
- React components: PascalCase default exports, React.FC typing optional
- Component declarations: Prefer top-level function declarations over function expressions
- Imports: Named imports from relative paths, group by external/internal
- Tailwind: Use utility classes, prefer responsive design patterns
- Functions: async/await preferred, camelCase naming
- File naming: lowercase with extensions (.tsx for components, .ts for utilities)
- Error handling: Use optional chaining and null checks for DOM operations
- Do not use inline styles, use Tailwind classes wherever possible

## TypeScript
- Strict mode enabled with exact optional properties
- Use explicit return types for exported functions
- Prefer `const` assertions for static configs
