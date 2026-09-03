import Link from "next/link";

export default function Footer() {
  return (
    <footer className="print:hidden mt-auto border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl grid grid-cols-[1fr_auto_1fr] flex-wrap items-center gap-3 px-6 py-3">
        <p className="justify-self-start font-mono text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Tailwind CSS v4 Cheatsheet
        </p>
        <div className="flex items-center gap-4 justify-self-center">
          <Link
            href="/privacy"
            className="font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Terms
          </Link>
        </div>
        <a
          href="https://imatlas.dev"
          target="_blank"
          rel="noopener"
          className="justify-self-end font-mono text-xs text-neutral-500 transition-colors hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
        >
          imatlas.dev
        </a>
      </div>
    </footer>
  );
}
