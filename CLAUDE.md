# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Wildan Mukmin (fullstack web developer), built with Next.js App Router. Four static pages (Home, About, Portfolio, Contact) — no backend, no database, no API routes. Project/experience data is hardcoded as inline arrays in the page files that render it.

Visual direction was rebuilt from scratch on this branch, referencing the layout patterns (not the content) of https://wahyudiaja.com/ — a bold editorial look: huge display type, a dark near-black base with white content blocks, one vivid lime accent used deliberately (badges, CTAs, active states, progress bars), an infinite tech-stack ticker, and a long single-scroll home page made of distinct sections.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

- `pnpm dev` — start dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint (`eslint-config-next` core-web-vitals + typescript rules)

There is no test suite configured in this repo (no test runner/script). Type-checking happens implicitly via `pnpm build`; there's no standalone `tsc` script.

## Architecture

- **Next.js App Router, TypeScript, Tailwind CSS v4.** Path alias `@/*` maps to the repo root (e.g. `@/components/...`, `@/lib/utils`).
- **Routes** live under `app/`: `page.tsx` (home — the flagship long-scroll landing page), `aboutme/page.tsx`, `portfolio/page.tsx`, `contact/page.tsx`. `app/layout.tsx` is the root shell (fonts, `<Navbar>`/`<Footer>`, `ThemeProvider`). `app/template.tsx` wraps every route in a `framer-motion` fade/slide-in — most pages are `"use client"` because they use motion and hooks.
- **Theming**: `next-themes` (`components/shared/ThemeProvider.tsx`) drives a `class`-based dark mode, default `dark`. All colors are CSS custom properties defined in `app/globals.css` (`:root` for light, `.dark` for dark) and re-exposed to Tailwind via `@theme inline` (e.g. `--color-primary` → `bg-primary`, `text-primary`, etc.). Palette: near-black `background` in dark mode / near-white in light mode, bold white or near-black `foreground`, and a single vivid lime `primary`/`accent` (`primary-foreground` is chosen for contrast against it — near-black in dark mode, white in light mode). Use the semantic tokens rather than raw colors so both themes stay correct. There are no decorative grids, glow blobs, or gradient text — the boldness comes from typography scale and the accent color, not effects.
- **Typography**: two fonts loaded in `app/layout.tsx` via `next/font/google` — `Inter` (`--font-inter`, body/UI text) and `Archivo` (`--font-archivo`, exposed as the `font-display` utility) for big headlines and section titles. Keep that split.
- **Motion**: `lib/motion.ts` holds the shared animation primitives (`headlineIn`, `fadeIn`, `maskReveal`, `rowIn`, `scaleIn`, `staggerContainer`, `easeEditorial`/`easeSharp`) — reuse these instead of inlining new `initial`/`animate` objects, so timing/easing stays consistent. `components/shared/Section.tsx` is the standard scroll-reveal wrapper — wrap new page sections in it. List/grid reveals use a `staggerContainer` parent with `rowIn` children (see `app/portfolio/page.tsx` and the feature/skills grids in `app/page.tsx`). `components/shared/Marquee.tsx` renders the infinite tech-stack ticker (backed by `.animate-marquee` / `.animate-marquee-reverse` keyframes in `globals.css`) — reuse it for any other looping ticker.
- **Components**:
  - `components/layout/` — `Navbar` (pill-style nav with an animated active-pill `layoutId` indicator, a `useScroll`/`useSpring`-driven progress bar under the header, and a "Hire Me" CTA) and `Footer` (big inverted CTA block + link/social bar).
  - `components/shared/` — `Section`, `Marquee`, `ThemeProvider`, `ThemeToggle`.
  - `components/ui/` — low-level primitives (`Button`; `Card` exists but is currently empty/unused) styled with the `cn()` helper (`lib/utils.ts`, `clsx` + `tailwind-merge`) and `variant` (`default`/`inverse`/`outline`/`ghost`)/`size` props. `Button` is a `motion.button` — interactive hover/tap states come from `whileHover`/`whileTap`, not utility-class `scale`. It renders as a rounded-full pill, matching the reference site's CTA shape.
- **Content model**: there is no CMS or data layer. Project listings (`app/page.tsx`'s "Selected Works" and the full `app/portfolio/page.tsx` project grid) and the experience/education timelines (`app/aboutme/page.tsx`) are each a literal array of objects defined at the top of the file/inline, then `.map()`-rendered. The home page's list is a curated subset of the portfolio page's list — when adding/editing a project, update both. Project images referenced by these arrays live in `public/projects/`. The "My Success Stories" testimonials section on the home page is a placeholder (no real client quotes exist yet) — it's marked as such in the UI; replace the copy with real feedback or delete the section before treating the site as launch-ready. The skill progress-bar percentages in the same file are self-assessed placeholders too — adjust them to taste.
- **Contact form** (`app/contact/page.tsx`) has no server action or API route — submit builds a `mailto:` link from the form state and redirects `window.location.href` to it; there's no email service integration to wire up.
