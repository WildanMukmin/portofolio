# Portfolio Design Direction

Dial: ENERGY 3 / RHYTHM 3 / MOTION 3

Reading this as: a solo developer portfolio for recruiters and clients, in a dark futuristic language built on chrome, dark glass and one electric-blue light.

Why this direction: the portfolio is the product. A chrome object, controlled lighting and choreographed motion demonstrate frontend and WebGL skill in the interface itself, which a flat template cannot do.

---

## 1. Identity motif

The **W monogram** is the one repeated shape. It is the nav logo, the SVG poster, and the extruded chrome sculpture in the hero. All three come from one outline (`lib/monogram.ts`), so they always match.

Do not add a second recurring motif. Everything else stays quiet so the W and the project previews carry the page.

---

## 2. Color

Core palette: midnight navy, cool white, one electric blue. Neutrals do not count against the cap (R-29).

| Role | Dark | Light |
|---|---|---|
| Background | `hsl(225 50% 4%)` near-black navy | `hsl(214 45% 97%)` ice |
| Surface | `hsl(223 44% 7%)` | white |
| Text | `hsl(214 40% 96%)` cool white | `hsl(224 50% 8%)` |
| Muted text | `hsl(218 22% 72%)` | `hsl(218 18% 40%)` |
| Accent fill | `hsl(222 100% 55%)` electric blue | `hsl(222 90% 50%)` |
| Accent text | `hsl(213 100% 75%)` icy blue | `hsl(224 78% 42%)` |
| Border | `hsl(220 30% 16%)` | `hsl(216 30% 86%)` |

All text pairs pass WCAG AA in both themes (measured: lowest body ratio 5.4:1, accent fill with white text 5.1:1).

Blue is the recognisable accent, not a background. It appears in links, the primary button, the active nav mark, focus rings, the lit edge of a hovered project, and the two lights described below. No purple, no rainbow gradients.

Both themes ship and both are tested. Dark is the default because the subject (chrome, light, glass) reads best against it; light is a working counterpart, not an afterthought.

---

## 3. Typography

- **Display: Archivo, width axis.** `font-display-wide` (125% width, extra bold) for the hero, the closing statement and page titles; `font-display` (112%) for section and project titles. The wide face reads like engraved signage next to chrome. Reason for Archivo: it was already in the project, and its `wdth` axis gives this voice without a new font.
- **Body: Inter.** Kept for readability at body sizes. Line length under 65ch.
- **Metadata: Geist Mono.** Role label, project category, stack lists, browser-bar hostnames. Small, sentence case, never tracked-out uppercase.

Headlines are left-aligned. Do not accent a single word in a headline.

---

## 4. Layout and rhythm

Sections change composition on purpose (RHYTHM 3):

1. **Hero:** left text column, chrome W offset to the right and overlapping the column edge.
2. **Stack:** three ruled rows, group name left, items set as large display type.
3. **Selected work:** split rows, image and text swapping sides.
4. **About:** portrait left, one large paragraph right.
5. **Closing statement:** oversized headline with a second light.

Project rows rotate through `split`, `split-reverse`, `wide` (`components/shared/project-layout.ts`). Never more than two split rows in a row.

No bento grids, no three identical cards, no pill-shaped everything. Radius: `0.75rem` on frames, `0.625rem` on controls, nothing fully round.

---

## 5. Hero

Must say who, what, and where to go next, in the first viewport: role label, headline, one supporting sentence, two actions. The availability note sits on the glass panel next to the W.

The chrome W is Three.js, loaded after the page has finished and the browser is idle. It never blocks the headline.

Fallbacks, in order:
1. No WebGL, a software renderer, or two cores or fewer: the SVG poster stays.
2. `prefers-reduced-motion`: one still frame, no loop, no pointer response.
3. Touch devices: slow idle rotation only, no pointer tilt.
4. Off screen or hidden tab: the render loop stops.

---

## 6. Materials, glass and light

Each effect has a dose cap and a reason (R-31).

- **Chrome:** a mirror material over a studio built from soft emissive panels, rendered once to a cube map. Reason: it gives real reflections with no HDRI download and no PMREM shader compiles.
- **Glass:** two elements only, the nav bar and the hero availability panel. Reason: the nav sits over moving content; the panel sits over the chrome, where the blur shows something.
- **Glow:** two lights only. One cobalt pool behind the hero object (reused faintly on inner pages), one behind the closing statement. Reason: they mark the page's two focal points.
- **Spotlight edge:** the border of a hovered project preview lights toward the cursor. Reason: it shows which project is active and where the pointer is.
- **Shadow:** only under project previews, tinted blue. Reason: they are the one thing meant to lift off the page.
- **Grid:** one sparse dot texture behind the hero. Reason: it gives the engineered object a coordinate surface, and it fades out before the fold.
- **Grain:** a static layer, painted once, to stop navy banding. Never animated.

---

## 7. Projects

The showcase is the main section. Each project is a case-study row:

- A browser frame with the real hostname (or "No public link").
- Real screenshots with a gallery strip. No invented previews.
- Category, title, subtitle, description, stack, link.
- Only data that exists in `lib/projects.ts`. Do not add roles, metrics or outcomes that are not recorded there.

Interaction: reveal wipes down once on scroll; on a mouse pointer the frame tilts up to 6 degrees and the edge lights; the screenshot scales slightly. None of it applies on touch or with reduced motion. Perspective stays small so screenshots remain legible.

---

## 8. Motion

MOTION 3: one choreographed moment, quiet everywhere else.

- **Hero entrance:** headline lines rise out of a clip, then text and buttons fade in, then the W. CSS-only, so it plays from the server HTML before hydration.
- **Scroll:** the W drifts and dims as the hero leaves; sections fade in with a CSS scroll-driven animation (opacity only); project frames wipe in once.
- **Pointer:** the W tilts toward the cursor; the two hero buttons and the closing buttons pull a few pixels (capped at 8px).
- **Route change:** a short opacity and 6px rise.

Easing is a single curve: `cubic-bezier(0.16, 1, 0.3, 1)`. Only `transform`, `opacity` and `clip-path` animate. Everything respects `prefers-reduced-motion`.

Do not add: marquees, cursor replacements, endless floating, decorative loops, motion on every card.

---

## 9. Content rules

- Real content only. Never invent clients, metrics, testimonials, roles or achievements.
- No em dashes. Sentence case. Plain verbs.
- One label per intent: "View Projects" and "Contact Me".
- Copy tone: direct, specific, first person.

---

## 10. Responsive and accessibility

- Mobile is composed, not shrunk: the headline wraps to short lines, the W moves under the actions, the nav becomes a menu with 44px targets. No horizontal page overflow at any width.
- Semantic landmarks, one `h1` per page, heading levels do not skip.
- Visible focus ring on every interactive element (2px, 3:1+ in both themes).
- Skip link, `aria-current` on the active nav item, descriptive link text, alt text on every screenshot.
- Decorative layers (light, grid, grain, the 3D canvas) are `aria-hidden` and `pointer-events: none`.
- Information is never carried by motion, color or hover alone.

---

## 11. Performance

- The 3D code is a separate chunk, fetched only on hardware-WebGL devices after the page has loaded.
- Scene setup is split into separate tasks (environment, geometry, shader compile) so none blocks input for long.
- Render loop pauses when off screen or in a hidden tab; pixel ratio capped at 2.
- No new libraries beyond `three`. Motion stays on the existing `framer-motion`.
- Check with Lighthouse and a real GPU, not only the simulated lab score.

---

## 12. Anti-patterns for this project

Cut these on sight: eyebrow pills above headlines, numbered markers on non-sequences, decorative status dots, gradient text, glow on more than the two named lights, glass on more than two elements, stat counters, fake terminals, three-card feature rows, generic 3D blobs, any effect that exists only because it can.
