"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import PrintButton from "./PrintButton";
import TailwindMark from "./TailwindMark";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";
import DownloadPdfMenu from "./DownloadPdfMenu";
import MarkdownExportButton from "./MarkdownExportButton";

const GITHUB_URL = "https://github.com/atlllas/TailwindCSS-Cheatsheet";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => void;
};

type NavItem = { slug: string; title: string };

export default function TopNav({
  active,
  navItems,
}: {
  active: "extended" | "condensed";
  navItems: NavItem[];
}) {
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
        <div className="flex items-center gap-1 sm:justify-self-start">
          <MobileNav items={navItems} />
          <Link href="/" className="flex items-center gap-2.5">
            <TailwindMark className="h-6 w-6 shrink-0" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Tailwind CSS v4 Cheatsheet
            </span>
          </Link>
        </div>
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
          <DownloadPdfMenu active={active} />
          <MarkdownExportButton active={active} />
          <PrintButton />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
