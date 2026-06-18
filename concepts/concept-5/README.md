# Concept 05

An isolated low-fidelity concept environment. It has its own entry point and
runs independently, but consumes the **shared** SDS design system (components in
`../../src/ui`, tokens in `../../src/theme.css`) via the path aliases configured
in the repo-root `vite.config.ts`.

## Rules

This environment is governed by the repo-root [`design.md`](../../design.md):
**use only SDS components, tokens, and layout primitives — nothing else.**

## Run

From the repository root:

```bash
npm install        # once, installs shared deps for all concepts
npm run concept:5  # dev server at http://localhost:8005
```

Build / preview this concept in isolation:

```bash
npm run concept:5:build
npm run concept:5:preview
```

## What's here

- `index.html` — entry document (loads Inter / Noto Serif / Roboto Mono).
- `main.tsx` — React bootstrap; imports shared `src/index.css` (SDS tokens).
- `App.tsx` — your concept canvas. Start here.
