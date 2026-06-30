# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is an Nx monorepo managed with Yarn 4.

```bash
# Dev server (http://localhost:4200)
yarn nx serve jesse-website

# Build
yarn nx build jesse-website

# Unit tests (Vitest)
yarn nx test jesse-website
yarn nx test design-system

# Run a single unit test file
yarn nx test jesse-website --testFile=src/sections/Work/__tests__/Work.spec.tsx

# Lint
yarn nx lint jesse-website
yarn nx lint design-system

# E2E tests (Playwright — starts the dev server automatically)
yarn nx e2e jesse-website

# Update Playwright snapshots
yarn nx e2e jesse-website --update-snapshots
```

## Architecture

### Monorepo layout

- **`apps/jesse-website`** — the React/Vite portfolio site
- **`libs/design-system`** — a standalone, app-agnostic component library published internally as `@jmacd229/design-system`

The design system is a hard boundary: it must not import anything from `apps/`. The app imports from the design system via the `@jmacd229/design-system` path alias (configured in `tsconfig.base.json`).

### Theme and animation system

Theme (`light`/`dark`) and animation state live **outside React** in two vanilla scripts that must be loaded in the HTML `<head>` before the app mounts:

- `libs/design-system/src/assets/scripts/theme.js` — attaches `window.setTheme` / `window.parseTheme`, toggles `html.dark` class, persists to `localStorage`
- `libs/design-system/src/assets/scripts/animations.js` — attaches `window.setAnimations` / `window.getAnimationsSetting`, toggles `html.no-motion` class, persists to `localStorage`

These scripts must be pre-loaded because they run synchronously to avoid a flash of incorrect theme on page load. The `warnOnMissingWindowScript` utility in the design system guards against forgetting to include them: it logs a console error and falls back gracefully rather than throwing.

Inside React, `useTheme` and `useAnimations` hooks (in `libs/design-system/src/lib/hooks/`) call these window functions and expose context to components.

All theming is CSS-first: `palette.css` defines semantic color tokens (`--primary-*`, `--secondary-*`, `--neutral-*`) whose values are overridden on `html.dark`. Never hard-code colors; always use CSS custom properties.

### Work section data pattern

All resume/project content is defined as plain data objects in `apps/jesse-website/src/sections/Work/constants/workExperienceItems/`. Each file exports one item typed as `WorkHistoryItem` or `ProjectHistoryItem` (see `types.ts`). Items are assembled in `constants/index.tsx` into `WORK_ITEMS` (employment) and `PROJECT_ITEMS` (side projects). To add a new entry, create a new file in `workExperienceItems/`, then re-export it from `index.tsx`.

`ExperienceContext` (`Experience/ExperienceContext.tsx`) holds the currently selected item for the detail panel — the click state is managed there rather than in local component state so both the list and the detail panel can read it without prop drilling.

### SVG / image assets

SVGs used as company/project icons are React components in `apps/jesse-website/src/assets/images/SVG/`. Static raster images (`.png`, `.jpg`) are also in `src/assets/images/`. Work items reference icons either as a JSX `icon` prop (SVG component) or an `iconImg` prop (`{ src, alt }` for raster images).

### Dynamic animations in the design system

The `libs/design-system/src/assets/animations/dynamic/` directory contains SVG-based animations that accept color overrides so they render correctly in both light and dark modes. See the README in that directory. Static Lottie animations (`light.json`, `dark.json`, `rocket.json`) are loaded via the `Animation` component, which uses `lottie-web`.

### Testing setup

Unit tests use **Vitest** + **React Testing Library**. The shared setup file (`test-utils/vitest.setup.ts`) imports the theme/animation scripts and CSS from the design system so the window globals and CSS vars are available in tests.

E2E tests use **Playwright** with snapshot testing and an axe-core accessibility scan (`e2e/a11y.spec.ts`) that runs against the full page. Snapshots are stored alongside the spec files in `*.spec.ts-snapshots/` directories — update them intentionally with `--update-snapshots`.
