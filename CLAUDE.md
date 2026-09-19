# CLAUDE.md

This file contains the project-specific instructions for working on this portfolio.

The goal of this project is to build a professional, production-quality personal portfolio that demonstrates strong frontend engineering, UI/UX, responsive design, accessibility, and attention to detail.

---

# 1. Project Context

This is a personal developer portfolio.

The portfolio should communicate:

- who I am
- what I do
- my technical skills
- my experience
- the projects I have built
- how I approach frontend development
- how to contact me

The website itself is part of my portfolio.

The quality of the implementation and user experience should demonstrate my frontend engineering ability.

---

# 2. Source of Truth

Before making changes, understand these files:

### `CLAUDE.md`

Defines:

- project rules
- coding conventions
- engineering constraints
- workflow expectations

### `DESIGN.md`

Defines:

- visual direction
- typography
- colors
- spacing
- layout
- interaction design
- responsive behavior
- accessibility expectations

### Antislop

If antislop is installed, follow its rules to avoid generic AI-generated UI, copy, and code patterns.

When there is a conflict:

1. Existing project requirements
2. `CLAUDE.md`
3. `DESIGN.md`
4. Antislop guidance
5. General best practices

Do not invent requirements that are not present in these sources.

---

# 3. General Working Principles

Act as a senior frontend engineer and product-minded UI/UX developer.

Prioritize:

- correctness
- maintainability
- accessibility
- responsive design
- performance
- visual consistency
- simplicity
- real user experience

Do not optimize for speed at the expense of quality.

Do not make changes simply because a different implementation looks more interesting.

---

# 4. Investigate Before Changing

Before modifying code:

1. Inspect the relevant files.
2. Understand the existing component structure.
3. Understand existing styling patterns.
4. Check whether a reusable component already exists.
5. Check existing dependencies before adding new ones.
6. Understand how the affected page currently works.

Never assume how the code works without inspecting it.

When a task references a specific file or component, read it before modifying it.

---

# 5. Preserve Existing Architecture

Do not rewrite the project architecture unless explicitly requested.

Prefer:

- extending existing components
- reusing existing utilities
- following existing patterns
- making small focused changes

Avoid:

- unnecessary rewrites
- replacing working libraries
- introducing new architectural patterns without justification
- moving files unnecessarily
- creating duplicate components

If the current architecture has a real problem, explain it before performing a large refactor.

---

# 6. Dependencies

Do not install a new dependency unless it provides meaningful value.

Before adding a dependency:

1. Check whether the project already has a solution.
2. Consider whether the functionality can be implemented simply with existing tools.
3. Consider bundle size and maintenance cost.
4. Explain why the dependency is necessary.

Prefer the simplest maintainable solution.

---

# 7. Component Principles

Build reusable components when reuse is real.

Avoid premature abstraction.

Do not create a component simply because a piece of JSX exists once.

Components should have:

- clear responsibilities
- understandable props
- predictable behavior
- maintainable structure

Avoid giant components when they become difficult to understand or maintain.

---

# 8. UI Implementation

Follow `DESIGN.md` for all visual decisions.

Do not independently invent a new visual direction.

When implementing UI, pay attention to:

- spacing
- typography
- hierarchy
- alignment
- responsive behavior
- interaction states
- loading states
- focus states
- accessibility
- visual consistency

The interface should feel intentional rather than assembled from generic UI components.

---

# 9. Responsive Design

Treat mobile as a first-class experience.

Always consider:

- mobile
- tablet
- laptop
- desktop
- large screens

Do not simply shrink desktop layouts.

Check for:

- horizontal overflow
- broken grids
- oversized text
- cramped spacing
- inaccessible navigation
- inappropriate touch targets
- images overflowing their containers

---

# 10. Accessibility

Accessibility is required, not optional.

Use:

- semantic HTML
- accessible buttons
- meaningful links
- visible focus states
- sufficient color contrast
- descriptive alt text
- accessible form controls
- keyboard navigation

Do not remove accessibility features simply for visual appearance.

Respect:

`prefers-reduced-motion`

---

# 11. Animation

Animations should have a purpose.

Use animation to communicate:

- interaction
- state
- hierarchy
- continuity

Prefer subtle and fast transitions.

Avoid:

- excessive animations
- unnecessary parallax
- constant floating effects
- distracting page transitions
- animation on every element

Do not add animation simply because an element can be animated.

---

# 12. Content

Portfolio content must be truthful.

Never invent:

- clients
- companies
- achievements
- statistics
- testimonials
- project results
- experience
- technologies

If information is missing, keep the content structure flexible and ask for the information when necessary.

Portfolio copy should be:

- concise
- specific
- natural
- professional
- human

Avoid generic AI-style marketing language.

---

# 13. Performance

Consider performance when implementing UI.

Prioritize:

- optimized images
- appropriate image loading
- minimal client-side JavaScript
- efficient animations
- reasonable bundle size
- avoiding unnecessary dependencies

Do not add visual effects that significantly hurt performance without a clear reason.

---

# 14. SEO

When working on pages, consider:

- meaningful page titles
- meta descriptions
- semantic HTML
- heading hierarchy
- Open Graph metadata where appropriate
- descriptive link text
- appropriate image alt text

Do not add SEO content that does not accurately represent the portfolio.

---

# 15. Code Quality

Write code that is:

- readable
- maintainable
- consistent with the existing project
- appropriately typed
- simple
- predictable

Avoid:

- unnecessary abstractions
- duplicated logic
- magic values when avoidable
- overly clever implementations
- dead code
- unused imports
- unnecessary comments

Comments should explain why something is necessary, not describe obvious code.

---

# 16. Do Not Over-Engineer

Use the minimum complexity necessary to solve the problem correctly.

Do not:

- build abstractions for hypothetical requirements
- add configuration that is not needed
- create unnecessary utilities
- refactor unrelated code
- add features that were not requested

A simple solution that is easy to maintain is preferable to a clever solution that is difficult to understand.

---

# 17. Git Safety

Do not perform destructive Git operations unless explicitly requested.

Never automatically:

- `git reset --hard`
- delete branches
- force push
- discard unfamiliar changes
- overwrite user changes

If the working tree contains changes that you did not create, inspect them and preserve them.

Do not assume unfamiliar changes are safe to remove.

---

# 18. Verification

Do not consider a UI task complete simply because the code compiles.

After meaningful UI changes, verify:

- build/type errors
- console errors
- responsive behavior
- visual consistency
- accessibility
- interaction states

If browser automation or Playwright is available, use it to inspect the rendered result when appropriate.

The rendered UI is the source of truth for visual verification.

---

# 19. Implementation Workflow

For non-trivial tasks, follow this workflow:

### Step 1 — Understand

Inspect the relevant project files.

### Step 2 — Plan

Identify the smallest reasonable set of changes.

### Step 3 — Implement

Make focused changes.

### Step 4 — Verify

Run the appropriate checks.

For UI work, inspect the actual rendered page when browser tooling is available.

### Step 5 — Review

Check the result against:

- `CLAUDE.md`
- `DESIGN.md`
- accessibility requirements
- responsive requirements
- original task requirements

### Step 6 — Report

Briefly explain:

- what changed
- which files changed
- what was verified
- any remaining issues

---

# 20. UI Review Standard

When working on the portfolio, do not ask only:

> "Does this look good?"

Evaluate:

- Does the hierarchy make sense?
- Is the content easy to scan?
- Is the CTA obvious?
- Does the design feel consistent?
- Does it feel personal?
- Does it feel professional?
- Does it work on mobile?
- Are interactions clear?
- Is anything visually unnecessary?
- Does anything feel like a generic AI-generated website?

The goal is not visual complexity.

The goal is intentional design.

---

# 21. Portfolio Quality Bar

The final website should feel appropriate for:

- recruiters
- hiring managers
- clients
- developers
- professional networking

The website should demonstrate frontend skill through the product itself.

A polished implementation is more important than having many visual effects.

---

# 22. Default Behavior

When the task is clear:

- investigate the codebase
- make the necessary changes
- verify the result
- report the result

When the task is ambiguous and changing files could cause significant unintended changes:

- inspect first
- explain the ambiguity
- ask for clarification before making large changes

Do not make broad assumptions about requirements.

---

# 23. Final Principle

Build the portfolio as a real product, not as a collection of impressive screenshots.

Prioritize:

**Clarity > Decoration**

**Usability > Novelty**

**Consistency > Complexity**

**Performance > Effects**

**Authenticity > Marketing**

**Maintainability > Cleverness**

<!-- antislop:start -->

## antislop

For UI, copy, people, mobile layout, or code comments work, load the antislop skill for the task:

- Core filter, always on: `antislop`
- UI / visual: `antislop-ui`
- Copy & text: `antislop-copywriting`
- People: `antislop-human`
- Mobile / responsive: `antislop-layoutmobile`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->
