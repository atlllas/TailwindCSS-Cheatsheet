"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import PrintButton from "./PrintButton";
import TailwindMark from "./TailwindMark";

const PDF_FILE: Record<"extended" | "condensed", string> = {
  extended: "/pdf/tailwind-v4-cheatsheet-extended.pdf",
  condensed: "/pdf/tailwind-v4-cheatsheet-condensed.pdf",
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export default function TopNav({ active }: { active: "extended" | "condensed" }) {
  const router = useRouter();

  function handleTabClick(href: string, isAlreadyActive: boolean) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isAlreadyActive) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const doc = document as ViewTransitionDocument;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (!doc.startViewTransition || prefersReducedMotion) return;

      e.preventDefault();
      doc.startViewTransition(() => {
        router.push(href);
      });
    };
  }

  return (
    <nav className="print:hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:flex-nowrap">
        <Link href="/" className="flex items-center gap-2.5 sm:justify-self-start">
          <TailwindMark className="h-6 w-6 shrink-0" />
          <span className="font-semibold text-neutral-900 dark:text-neutral-100">
            Tailwind CSS v4 Cheatsheet
          </span>
        </Link>
        <div className="flex items-center gap-2 text-sm sm:justify-self-center">
          <Link
            href="/"
            onClick={handleTabClick("/", active === "extended")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              active === "extended"
                ? "bg-sky-600 text-white"
                : "text-neutral-600 hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
            }`}
          >
            Extended
          </Link>
          <Link
            href="/condensed"
            onClick={handleTabClick("/condensed", active === "condensed")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              active === "condensed"
                ? "bg-sky-600 text-white"
                : "text-neutral-600 hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
            }`}
          >
            Condensed
          </Link>
        </div>
        <div className="flex items-center gap-2 text-sm sm:justify-self-end">
          <a
            href={PDF_FILE[active]}
            download
            className="rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
          >
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>
    </nav>
  );
}
