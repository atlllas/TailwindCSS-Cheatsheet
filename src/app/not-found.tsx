import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-sky-600 dark:text-sky-400">404</p>
      <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        This class doesn&apos;t exist
      </h1>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
        The page you&apos;re looking for isn&apos;t here — maybe it got
        renamed in a version bump too.
      </p>
      <div className="mt-8 flex items-center gap-3 text-sm">
        <Link
          href="/"
          className="rounded-md bg-sky-600 px-4 py-2 font-medium text-white transition-colors hover:bg-sky-700"
        >
          Extended cheatsheet
        </Link>
        <Link
          href="/condensed"
          className="rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 hover:bg-neutral-100 transition-colors dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Condensed cheatsheet
        </Link>
      </div>
    </div>
  );
}
