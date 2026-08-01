# Contributing to Le Relevé

Thanks for your interest in improving Le Relevé! This is a small, dependency-light
static web app for understanding French public finances. Contributions that keep it
simple, accessible, and jargon-free are very welcome.

## Getting started

There is no framework and no bundler. Clone the repo and open the pages directly:

- Open `index.html` in a browser (works from `file://`), **or**
- run a local server for the live-data path:

```
npm run serve      # serves the project on a local port
```

## Refreshing the data

Data snapshots live in `data/*.json` and are embedded so the app works offline.
To rebuild them from the public APIs:

```
npm run data       # fetch-data.mjs + build.mjs
npm run build      # rebuild embedded snapshots only
```

Requires Node.js ≥ 18. No numbers are hard-coded in the UI — every figure is driven
by the data files (see `DATA.md`).

## Quality bar

Read `QUALITY.md` before opening a pull request. In short:

- **Accessible by default** — WCAG-compliant, keyboard-navigable, dark/light aware.
- **No jargon** — translate every figure into a concrete per-inhabitant reference.
- **Data-driven** — no hard-coded numbers in the views.
- **Dependency-light** — no build-time framework; keep the vendored footprint small.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) with the version bump,
e.g. `feat(v0.8.8): …`, `fix(v0.8.8): …`. Update `CHANGELOG.md` and
`assets/js/version.js` together when you change the version.
