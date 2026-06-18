# Concepts

Five **isolated** low-fidelity concept environments: `concept-1` … `concept-5`.

Each folder is a standalone Vite app with its own entry point (`index.html`,
`main.tsx`, `App.tsx`) so you can experiment freely without one concept affecting
another. They all **share a single source of truth** for the design system:

- Components: `../src/ui/*` via the aliases (`primitives`, `compositions`, `layout`,
  `icons`, `images`, `hooks`, `utils`, `data`) in the repo-root `vite.config.ts`.
- Tokens / styles: `../src/index.css` (which imports `theme.css`, `reset.css`,
  `responsive.css`, `icons.css`).

## Rules (non-negotiable)

All concepts must use **only** the SDS design system — components, tokens, and
layout primitives. See the repo-root [`design.md`](../design.md) and the Cursor
rule at `.cursor/rules/concepts-design-system.mdc`.

## Run a concept

From the repository root:

```bash
npm install          # once
npm run concept:1    # → http://localhost:8001
npm run concept:2    # → http://localhost:8002
npm run concept:3    # → http://localhost:8003
npm run concept:4    # → http://localhost:8004
npm run concept:5    # → http://localhost:8005
```

Each concept can run at the same time (distinct ports). Build / preview a single
concept with `npm run concept:<n>:build` and `npm run concept:<n>:preview`.

## Add a new concept

1. Copy any `concept-*` folder to `concept-<n>`.
2. Add matching `concept:<n>` / `concept:<n>:build` / `concept:<n>:preview` scripts
   to the root `package.json` (point the dev/preview port to `800<n>`).
3. Keep using SDS only.
