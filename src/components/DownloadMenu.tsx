"use client";

import { useEffect, useRef, useState } from "react";
import {
  CHEATSHEET_GROUPS,
  CONDENSED_GROUPS,
  V4_BREAKING_CHANGES,
  LAST_UPDATED,
  type CheatGroup,
} from "@/lib/cheatsheet-data";

function groupsToMarkdown(groups: CheatGroup[]): string {
  return groups
    .map((group) => {
      const entries = group.entries
        .map((entry) => `- \`${entry.class}\` — ${entry.description}`)
        .join("\n");
      return `## ${group.title}\n\n${entries}`;
    })
    .join("\n\n");
}

function buildExtendedMarkdown(): string {
  const changesTable = [
    "| v3 | v4 | Note |",
    "| --- | --- | --- |",
    ...V4_BREAKING_CHANGES.map(
      (c) => `| \`${c.from}\` | \`${c.to}\` | ${c.note ?? ""} |`,
    ),
  ].join("\n");

  return [
    "# Tailwind CSS v4 Cheatsheet — Extended",
    "",
    `_Last updated: ${LAST_UPDATED}_`,
    "",
    "## Changed since v3",
    "",
    changesTable,
    "",
    groupsToMarkdown(CHEATSHEET_GROUPS),
    "",
  ].join("\n");
}

function buildCondensedMarkdown(): string {
  return [
    "# Tailwind CSS v4 Cheatsheet — Quick Reference",
    "",
    `_Last updated: ${LAST_UPDATED}_`,
    "",
    groupsToMarkdown(CONDENSED_GROUPS),
    "",
  ].join("\n");
}

function downloadMarkdown(kind: "extended" | "condensed") {
  const markdown = kind === "extended" ? buildExtendedMarkdown() : buildCondensedMarkdown();
  const filename =
    kind === "extended"
      ? "tailwind-v4-cheatsheet-extended.md"
      : "tailwind-v4-cheatsheet-condensed.md";
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const buttonClassName =
  "rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300";

const itemClassName =
  "block w-full text-left px-3 py-2 text-sm text-neutral-700 hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300";

const groupLabelClassName =
  "px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500";

export default function DownloadMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`${buttonClassName} flex items-center gap-1`}
      >
        Download
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-1 w-72 rounded-md border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          <p className={groupLabelClassName}>Extended</p>
          <a
            href="/pdf/tailwind-v4-cheatsheet-extended.pdf"
            download
            role="menuitem"
            onClick={() => setOpen(false)}
            className={itemClassName}
          >
            Full PDF (with “Changed since v3”)
          </a>
          <a
            href="/pdf/tailwind-v4-cheatsheet-extended-no-changes.pdf"
            download
            role="menuitem"
            onClick={() => setOpen(false)}
            className={itemClassName}
          >
            PDF without “Changed since v3”
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              downloadMarkdown("extended");
              setOpen(false);
            }}
            className={itemClassName}
          >
            Markdown
          </button>

          <div className="my-1 border-t border-neutral-100 dark:border-neutral-800" />

          <p className={groupLabelClassName}>Condensed</p>
          <a
            href="/pdf/tailwind-v4-cheatsheet-condensed.pdf"
            download
            role="menuitem"
            onClick={() => setOpen(false)}
            className={itemClassName}
          >
            PDF
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              downloadMarkdown("condensed");
              setOpen(false);
            }}
            className={itemClassName}
          >
            Markdown
          </button>
        </div>
      )}
    </div>
  );
}
