# 1:1 Question Bank

A question bank webapp for one-on-ones with the people you work with — direct reports, your
manager, skip levels. Pick a theme, draw a question, and keep the conversation from collapsing
into a status update.

**Live site:** https://michael-oswald.github.io/one-on-one-question-bank/

## What it does

- **10 themed categories** — icebreakers, wellbeing, current work, wins & challenges, goals,
  feedback, team, upward/company feedback, remote & hybrid, and wrap-up — plus an
  *All categories* deck that mixes everything.
- **73 open-ended questions**, one on screen at a time in large type, sized for screen sharing.
- **No repeats within a session.** Each deck is drawn down before it reshuffles, and the reshuffle
  never repeats the question still on screen.
- **A follow-up hint** under each question, so the prompt leads somewhere.
- **Copy to clipboard** for pasting into meeting notes.
- **Reset session** to clear the drawn history for every deck.
- Keyboard shortcuts: <kbd>N</kbd> for the next question, <kbd>C</kbd> to copy.
- Responsive, keyboard-navigable, and follows the system light/dark theme.

Everything is client-side and in-memory. No accounts, no backend, no storage, no analytics —
close the tab and the session is gone.

## Stack

React 18 + TypeScript, built with Vite. No router, no state library, no CSS framework — the
whole app is one component over a typed question library. The production build is about
53 KB gzipped.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/one-on-one-question-bank/
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

Note the `/one-on-one-question-bank/` path in dev: `base` in `vite.config.ts` is set
unconditionally so local URLs match the GitHub Pages sub-path.

## Deployment

Pushes to `main` build and publish to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Without that, the workflow's deploy step fails.

If the repository is ever renamed, update `base` in `vite.config.ts` to match the new name.

## Adding or editing questions

All content lives in [`src/data/questions.ts`](src/data/questions.ts). Add an entry to
`QUESTIONS` with a unique `id`, an existing `category`, and the question `text`; the UI, the
counters, and the no-repeat logic pick it up automatically. To add a category, add it to
`CATEGORIES` (the `CategoryId` union will tell you what else needs updating).

Keep questions open-ended — anything answerable with "yes" ends the conversation instead of
starting one.

## Product requirements

The original spec is in [`1-1-question-prd.md`](1-1-question-prd.md).
