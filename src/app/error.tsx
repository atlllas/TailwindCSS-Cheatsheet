"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-sky-600 dark:text-sky-400">Error</p>
      <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Something broke
      </h1>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
        An unexpected error happened while rendering this page. Try again, or
        head back to the cheatsheet.
      </p>
      <div className="mt-8 flex items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-md bg-sky-600 px-4 py-2 font-medium text-white transition-colors hover:bg-sky-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 hover:bg-neutral-100 transition-colors dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Back to cheatsheet
        </Link>
      </div>
    </div>
  );
}
