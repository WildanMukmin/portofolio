# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Wildan Mukmin (fullstack web developer), built with Next.js App Router. Four static pages (Home, About, Portfolio, Contact) — no backend, no database, no API routes. Project/experience data is hardcoded as inline arrays in the page files that render it.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

- `pnpm dev` — start dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint (`eslint-config-next` core-web-vitals + typescript rules)

There is no test suite configured in this repo (no test runner/script). Type-checking happens implicitly via `pnpm build`; there's no standalone `tsc` script.

## Architecture

- **Next.js App Router, TypeScript, Tailwind CSS v4.** Path alias `@/*` maps to the repo root (e.g. `@/components/...`, `@/lib/utils`).
- **Routes** live under `app/`: `page.tsx` (home), `aboutme/page.tsx`, `portfolio/page.tsx`, `contact/page.tsx`. `app/layout.tsx` is the root shell (fonts, `<Navbar>`/`<Footer>`, background decoration, `ThemeProvider`). `app/template.tsx` wraps every route in a `framer-motion` fade/slide-in — most pages are `"use client"` because they use motion and hooks.
- **Theming**: `next-themes` (`components/shared/ThemeProvider.tsx`) drives a `class`-based dark mode, default `dark`. All colors are CSS custom properties defined in `app/globals.css` (`:root` for light, `.dark` for dark) and re-exposed to Tailwind via `@theme inline` (e.g. `--color-primary` → `bg-primary`, `text-primary`, etc.). The palette is a restrained near-monochrome "ink/paper" system (warm off-white/near-black) with one muted accent color used sparingly for signals (links, active nav, tags) — not glows or gradients. When adding UI, use the semantic tokens (`background`, `foreground`, `card`, `primary`, `muted`, `border`, ...) rather than raw colors, so both themes stay correct.
- **Typography**: two fonts loaded in `app/layout.tsx` via `next/font/google` — `Inter` (`--font-sans`, body/UI text) and `Fraunces` (`--font-display`, serif, used via the `font-display` utility for headlines/section titles only). Keep that split; don't put the display font on body copy or vice versa.
- **Motion**: `lib/motion.ts` holds the shared animation primitives (`headlineIn`, `fadeIn`, `maskReveal`, `rowIn`, `staggerContainer`, `easeEditorial`/`easeSharp`) — reuse these instead of inlining new `initial`/`animate` objects, so timing/easing stays consistent. `components/shared/Section.tsx` is the standard scroll-reveal wrapper (`variant="headline"` for hero-weight content, default `"fade"` for supporting sections) — wrap new page sections in it. List/grid reveals use a `staggerContainer` parent with `rowIn` children (see the "Selected Works" and features blocks in `app/page.tsx` for the pattern).
- **Components**:
  - `components/layout/` — `Navbar` (route list driven by a `navItems` array, active-link indicator via `usePathname` + a shared `layoutId` motion element, plus a `useScroll`-driven progress bar) and `Footer`.
  - `components/shared/` — `Section`, `ThemeProvider`, `ThemeToggle`.
  - `components/ui/` — low-level primitives (`Button`; `Card` exists but is currently empty/unused) styled with the `cn()` helper (`lib/utils.ts`, `clsx` + `tailwind-merge`) and `variant`/`size` props. `Button` is a `motion.button` — interactive hover/tap states come from `whileHover`/`whileTap`, not utility-class `scale`.
- **Content model**: there is no CMS or data layer. Project listings (`app/page.tsx`'s "Selected Works" and the full `app/portfolio/page.tsx` project grid) and the experience/education timelines (`app/aboutme/page.tsx`) are each a literal array of objects defined at the top of the file/inline, then `.map()`-rendered. The home page's list is a curated subset of the portfolio page's list — when adding/editing a project, update both. Project images referenced by these arrays live in `public/projects/`.
- **Contact form** (`app/contact/page.tsx`) has no server action or API route — submit builds a `mailto:` link from the form state and redirects `window.location.href` to it; there's no email service integration to wire up.
