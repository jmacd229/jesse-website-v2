---
name: local-review
description: Review code changes in this repo against Jesse's code-quality principles plus project-specific design checks (responsiveness, light/dark mode, accessibility). Use when the user asks to review staged changes, review the current branch/PR diff, or runs /local-review. Supports --staged, --branch, and --visual flags.
---

# Local Review

A project-specific code review for `jesse-website-v2`. Unlike the generic `/code-review`,
this skill checks the diff against the standards in `CLAUDE.local.md` and `CLAUDE.md`,
**and** evaluates responsiveness, light/dark theming, and accessibility — the things that
are easy to miss in a portfolio site but don't show up as "bugs" in a normal review.

## 1. Determine scope

Parse the user's invocation for flags:

- `--staged` → review `git diff --staged` only.
- `--branch` → review the current branch against `main`: `git diff main...HEAD` (merge-base diff, use `git merge-base main HEAD` if needed).
- `--visual` → in addition to static review, do a live browser pass (see step 5).

If no `--staged`/`--branch` flag is given, ask the user with `AskUserQuestion` which scope they want — do not guess silently, since the two diffs can differ substantially (uncommitted staged work vs. the full branch).

Run `git status` and the appropriate `git diff` to get the change set. If the diff is empty, say so and stop.

## 2. Decide whether to split into subagents

Count files changed and total lines changed (`git diff --stat`).

- **Small diff** (rough guide: fewer than ~8 files or ~400 changed lines): review everything yourself, inline, in one pass. Don't spawn subagents for trivial changes — it's wasted overhead.
- **Large diff**: spawn three `Agent` calls in parallel (single message, multiple tool calls), each scoped to one concern below, each given the same diff (or `git diff` command to run themselves) plus the relevant checklist section. Each subagent should report back a short list of findings (file, line, summary, failure scenario) rather than prose.

## 3. Review criteria

### A. Code quality (from CLAUDE.local.md)

- Prefer less code over more. Flag anything that could reuse an existing helper/component/hook instead of duplicating logic.
- When the *same* logic appears in multiple places in this diff (or duplicates something already in the codebase), flag it for extraction into a shared helper — but don't flag premature abstraction for logic that only appears once.
- General correctness: look for actual bugs, not style nits.

### B. Project architecture (from CLAUDE.md)

- `libs/design-system` must never import from `apps/`. Flag any new import that crosses this boundary.
- Colors must come from CSS custom properties (`--primary-*`, `--secondary-*`, `--neutral-*` in `palette.css`), never hardcoded hex/rgb values, since `html.dark` overrides them.
- New Work/Project entries should follow the existing data pattern: one file per item in `workExperienceItems/`, typed as `WorkHistoryItem`/`ProjectHistoryItem`, re-exported from `constants/index.tsx`.
- Theme/animation state changes should go through `window.setTheme`/`window.setAnimations`, not new ad-hoc state.

### C. Responsiveness

For any changed component with layout/styling (CSS, styled-components, className changes, new JSX with layout props):

- Does it have responsive handling (media queries, container queries, fluid units, flex/grid wrapping) or is it only correct at one viewport size?
- Are touch targets and spacing reasonable on mobile (check against any existing mobile-specific overrides nearby, e.g. recent mobile-spacing fixes)?
- If a new component was added with no responsive consideration at all and it's user-facing, flag it.

### D. Light/dark mode

- Any hardcoded color (hex, rgb, named CSS color) instead of a `--primary-*`/`--secondary-*`/`--neutral-*` token is a finding.
- New images/icons: do they need a dark-mode variant (check naming pattern like `spintools.png` / `spintools_dark.png`) or do they already work on both backgrounds (e.g. transparent SVG using currentColor)?
- New SVG components: do they hardcode fill/stroke colors instead of inheriting via CSS variables or `currentColor`?

### E. Accessibility

- Images: `alt` text present and meaningful (not empty unless decorative).
- Interactive elements: semantic HTML (`button`, `a`) over `div`/`span` with click handlers; if not, check for keyboard handling and `role`/`aria-*`.
- Color contrast: flag low-contrast color token pairings if visually obvious from the diff.
- Anything that would plausibly fail the existing `e2e/a11y.spec.ts` axe-core scan (missing labels, heading order, landmark structure).

## 4. Static review (default)

Read the diffed files (and surrounding context via `Read`/`Grep` as needed) and check each against sections A–E above. This is the default mode — no dev server required.

## 5. Visual verification (only with `--visual`)

If `--visual` was passed:

1. Start the dev server (`yarn nx serve jesse-website`) if not already running — check first, don't duplicate a running instance.
2. If a browser/Playwright tool is available in this session, navigate to the affected routes/sections, then:
   - Resize to mobile, tablet, and desktop breakpoints and screenshot each.
   - Toggle theme via `window.setTheme('light')` / `window.setTheme('dark')` and screenshot both.
3. If an a11y-relevant route changed, run `yarn nx e2e jesse-website --grep a11y` for an automated axe-core scan.
4. If no browser tool is available in this session, say so explicitly and fall back to static review only — don't fake visual confirmation.

Fold anything found visually into the same findings list as the static review.

## 6. Report results

Merge findings from subagents (if split) or your own pass (if inline). Rank most-severe first. Call `ReportFindings` with the merged, de-duplicated list — don't also print the findings as prose. If nothing survived review, call it with an empty array.
