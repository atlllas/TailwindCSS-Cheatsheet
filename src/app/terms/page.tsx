import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the Tailwind CSS v4 Cheatsheet.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="mx-auto w-full max-w-3xl px-6 flex-1 flex flex-col">
        <main className="pt-24 pb-16 sm:pt-32">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Terms of Use
            </h1>
            <p className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              Last updated: September 2026
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                This is a free, ad-free reference for Tailwind CSS v4 utility
                classes. By using it, you accept the terms below.
              </p>
              <p>
                The content and PDFs are provided{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  as is
                </span>
                , with no warranty of any kind. We accept no responsibility
                for the accuracy or completeness of the class names,
                descriptions, or examples — always verify against the
                official Tailwind CSS documentation before relying on it in
                production.
              </p>
              <p>
                The service may be updated, temporarily unavailable, or
                discontinued at any time, without prior notice.
              </p>
              <p>
                This site is an independent, third-party resource and is not
                affiliated with, endorsed by, or sponsored by Tailwind Labs
                Inc. &quot;Tailwind CSS&quot; and its logo are trademarks of
                Tailwind Labs Inc.
              </p>
              <p>
                For questions, you can reach us via{" "}
                <a
                  href="https://imatlas.dev"
                  target="_blank"
                  rel="noopener"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  imatlas.dev
                </a>
                .
              </p>
            </div>

            <Link
              href="/"
              className="mt-8 inline-block font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
