## New Portfolio (Next.js 14 + TypeScript + Tailwind CSS)

A personal portfolio and blog built with Next.js App Router, TypeScript, and Tailwind CSS. It features an animated, resume-driven homepage, MDX-powered blog, and a lightweight UI component set.

### Tech stack

- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, tailwindcss-animate, typography plugin
- **Theming**: next-themes (class-based dark mode)
- **Content**: MDX files with frontmatter (`content/*.mdx`)
- **Markdown pipeline**: unified, remark-parse, remark-rehype, rehype-pretty-code, rehype-stringify (Shiki themes: min-light/min-dark)
- **UI/Animation**: Radix UI (Avatar, Dialog, Tooltip, Separator), Embla Carousel, Framer Motion, custom MagicUI components

### Project structure (high-level)

- `src/app/` — App Router pages
  - `page.tsx` — Homepage (resume-driven sections: About, Work, Education, Skills, Projects, Awards)
  - `blog/page.tsx` — Blog index
  - `blog/[slug]/page.tsx` — Blog post route (currently placeholder export)
  - `layout.tsx` — Root layout, theme providers, metadata from `DATA`
- `src/components/` — UI and site components (e.g., `navbar.tsx`, `mdx.tsx`, MagicUI widgets)
- `src/data/` — Data sources (notably `resume.tsx` exporting `DATA`)
- `src/lib/` — Utilities
- `content/` — MDX blog posts (e.g., `hello-world.mdx`)
- `public/` — Static assets (icons, images, PDFs)

### Getting started

Prerequisites:

- Node.js 18.17+ (recommended LTS)
- npm 9+ (or your preferred package manager)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Lint:

```bash
npm run lint
```

Note: The project configuration intentionally ignores ESLint and TypeScript errors during production builds (see `next.config.mjs`). For stricter deployments, consider turning these back on.

### Customize your profile and content

- **Site metadata and profile**: Edit `src/data/resume.tsx` (`DATA` object) to change:
  - Name, description, avatar, location, contact links
  - Navbar links, projects, work experience, education, awards
  - Public assets live under `public/` and `public/icons/`
- **Global metadata**: `src/app/layout.tsx` pulls from `DATA` to configure `<Metadata>`, Open Graph, and Twitter card.
- **Theme**: Dark mode is class-based (Tailwind `darkMode: ["class"]`). Theme provider is configured in `layout.tsx`.

### Blog with MDX

Posts live in the `content/` folder and use frontmatter. The blog index is powered by `getBlogPosts` in `src/data/blog.ts`, which:

- Reads MDX files from `content/`
- Parses frontmatter via `gray-matter`
- Converts markdown to HTML via unified/remark/rehype with pretty code highlighting

Frontmatter shape:

- `title` (string)
- `publishedAt` (ISO date string)
- `summary` (string)
- `image` (optional string)

Example post (`content/hello-world.mdx`):

````mdx
---
title: "Hello World"
publishedAt: "2024-06-18"
summary: "My first post on my new blog."
---

Hi there!

```jsx
console.log("Hello World");
```
````

```

Custom MDX components (links, images, headings with anchored ids, tables) are defined in `src/components/mdx.tsx` and can be used directly within your MDX.

Note: The dynamic `[slug]` post page currently exports a placeholder `null` component. To fully enable per-post rendering and metadata, uncomment/restore the implementation in `src/app/blog/[slug]/page.tsx` (the scaffold is already present as comments).

### Styling and UI
- Tailwind is configured in `tailwind.config.ts` with:
  - Extended colors derived from CSS variables
  - Container, font, radius, animations (accordion, meteor)
  - Plugins: `tailwindcss-animate`, `@tailwindcss/typography`
- MagicUI components (e.g., `Meteors`, terminal demo) and Embla Carousel are used on the homepage.
- Radix UI is used for accessibility-first primitives (Avatar, Dialog, Tooltip, Separator).

### Available scripts
- `dev`: Run the Next.js dev server
- `build`: Build the production bundle
- `start`: Start the production server
- `lint`: Run Next.js ESLint

### Deployment
- Recommended: Vercel. This is a standard Next.js App Router project.
- Ensure environment variables (if added later) are configured in your hosting provider.
- For stricter CI, remove or adjust:
  - `eslint.ignoreDuringBuilds: true`
  - `typescript.ignoreBuildErrors: true`
  in `next.config.mjs`.

### License
MIT. See `LICENSE`.


```
