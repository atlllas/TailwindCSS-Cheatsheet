import Link from "next/link";
import TailwindMark from "./TailwindMark";

export default function Footer() {
  return (
    <footer className="print:hidden mt-auto">
      <div className="h-px bg-gradient-to-r from-sky-200 via-blue-200 to-transparent dark:from-sky-900/50 dark:via-blue-900/50" />
      <div className="mx-auto max-w-7xl grid grid-cols-[1fr_auto_1fr] flex-wrap items-center gap-3 px-6 py-3">
        <p className="flex items-center gap-1.5 justify-self-start font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <TailwindMark className="h-3.5 w-3.5 opacity-40" />
          © {new Date().getFullYear()} Tailwind CSS v4 Cheatsheet
        </p>
        <div className="flex items-center gap-4 justify-self-center">
          <Link
            href="/privacy"
            className="font-mono text-xs text-neutral-500 transition-colors hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-mono text-xs text-neutral-500 transition-colors hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
          >
            Terms
          </Link>
          <a
            href="https://github.com/atlllas/TailwindCSS-Cheatsheet/issues/new?title=Content+issue&body=Which+class+or+section%3F%0A%0AWhat%27s+wrong%3F%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-neutral-500 transition-colors hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
          >
            Report an issue
          </a>
        </div>
        <a
          href="https://imatlas.dev"
          target="_blank"
          rel="noopener"
          className="justify-self-end font-mono text-xs text-neutral-500 transition-colors hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
        >
          imatlas.dev
        </a>
      </div>
    </footer>
  );
}
