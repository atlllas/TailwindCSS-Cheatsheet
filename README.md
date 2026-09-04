# Tailwind CSS v4 Cheatsheet

An up-to-date, printable, grouped Tailwind CSS **v4** utility class reference —
built because most cheatsheets floating around are still v3 (`shadow` instead
of `shadow-sm`, `rounded` instead of `rounded-sm`, `flex-shrink-*` instead of
`shrink-*`, etc.).

Live at [tailwindcss.imatlas.dev](https://tailwindcss.imatlas.dev).

Two versions:

- **Extended** (`/`) — every utility category from the official docs, grouped,
  plus a "Changed since v3" table of every renamed/removed utility.
- **Condensed** (`/condensed`) — the utilities you actually reach for every
  day, on one printable page.

Both are browsable in the app and downloadable as PDF (`public/pdf/`).

## Features

- **Search** — filters every entry (and the "Changed since v3" table) by
  class name or description. Press `/` anywhere on the page to focus it.
- **Sidebar nav with scroll-spy** — highlights whichever section is
  currently in view; a mobile drawer exposes the same nav below the `lg`
  breakpoint.
- **Click to copy** — click any class entry to copy its exact text.
- **Dark mode** toggle, manually switchable and persisted to
  `localStorage` (with an inline init script so there's no flash of the
  wrong theme on load).
- **Printable** — "Print / Save as PDF" in the browser, or download the
  pre-generated PDFs, use the same print stylesheet and stay in sync.
- Cross-fade page transition between Extended/Condensed via the native
  View Transitions API (falls back to instant navigation if unsupported
  or `prefers-reduced-motion` is set).

## Development

```bash
npm install
npm run dev
```

## Regenerating the PDFs

The PDFs in `public/pdf/` are pre-rendered from the app itself (same
grouping, same print stylesheet) using a headless browser, so they never
drift from what's on the page.

```bash
npm run build
npm run pdf
```

This starts a production server on a local port, prints `/` and
`/condensed` to PDF via Puppeteer, and writes:

- `public/pdf/tailwind-v4-cheatsheet-extended.pdf`
- `public/pdf/tailwind-v4-cheatsheet-condensed.pdf`

## Updating the content

All cheatsheet data lives in `src/lib/cheatsheet-data.ts`:

- `V4_BREAKING_CHANGES` — the v3 → v4 rename/removal table.
- `CHEATSHEET_GROUPS` — the extended, category-grouped reference.
- `CONDENSED_GROUPS` — the short, high-frequency subset for the printable
  quick reference (kept intentionally small — see `LEFT_SLUGS` in
  `src/app/condensed/page.tsx` for how the two printed columns are balanced).

New group slugs should also get an icon in `src/components/CategoryIcon.tsx`
(falls back to no icon if a slug isn't mapped, so this is optional).

Content was compiled from the official Tailwind CSS v4 docs
(tailwindcss.com/docs) and the v4 upgrade guide. When Tailwind ships new
utilities, update the relevant group here and re-run `npm run pdf`.

## Stack

Next.js (App Router) + React + Tailwind CSS v4 + TypeScript. PDF generation
via Puppeteer, driven by the same print stylesheet (`@media print` in
`src/app/globals.css`) used when a visitor hits "Print / Save as PDF" in the
browser.
