"use client";

import { useEffect, useRef, useState } from "react";

const OPTIONS: Record<"extended" | "condensed", { label: string; href: string }[]> = {
  extended: [
    { label: "Full (with “Changed since v3”)", href: "/pdf/tailwind-v4-cheatsheet-extended.pdf" },
    { label: "Without “Changed since v3”", href: "/pdf/tailwind-v4-cheatsheet-extended-no-changes.pdf" },
  ],
  condensed: [
    { label: "Condensed", href: "/pdf/tailwind-v4-cheatsheet-condensed.pdf" },
  ],
};

const buttonClassName =
  "rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300";

export default function DownloadPdfMenu({ active }: { active: "extended" | "condensed" }) {
  const options = OPTIONS[active];
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

  if (options.length === 1) {
    return (
      <a href={options[0].href} download className={buttonClassName}>
        Download PDF
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`${buttonClassName} flex items-center gap-1`}
      >
        Download PDF
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
          className="absolute right-0 z-20 mt-1 w-64 rounded-md border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          {options.map((option) => (
            <a
              key={option.href}
              href={option.href}
              download
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm text-neutral-700 hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
