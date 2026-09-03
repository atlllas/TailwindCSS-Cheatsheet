import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import { CHEATSHEET_GROUPS, V4_BREAKING_CHANGES } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Extended)",
  description:
    "An up-to-date, printable Tailwind CSS v4 utility class reference, grouped by category.",
};

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <TopNav active="extended" />

      <div className="mx-auto w-full max-w-5xl px-6 flex-1">
        <header className="pt-14 pb-10 print:pt-0 print:pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Tailwind CSS v4 Cheatsheet
          </h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Extended, grouped reference for Tailwind CSS v4 utility classes —
            compiled from the official docs so it actually reflects v4, not
            v3. Need something you can keep on your desk?{" "}
            <Link href="/condensed" className="underline">
              Try the condensed version
            </Link>
            .
          </p>
        </header>

        <section className="group-card mb-12 rounded-lg border border-amber-300 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-200">
            Changed since v3
          </h2>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">
            The most common source of outdated cheatsheets: these utilities
            were renamed or changed behavior in v4.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-amber-900/70 dark:text-amber-300/70">
                  <th className="pb-2 pr-4 font-medium">v3</th>
                  <th className="pb-2 pr-4 font-medium">v4</th>
                  <th className="pb-2 font-medium">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200 dark:divide-amber-900">
                {V4_BREAKING_CHANGES.map((change) => (
                  <tr key={change.from}>
                    <td className="py-1.5 pr-4 font-mono text-xs text-amber-900 dark:text-amber-200">
                      {change.from}
                    </td>
                    <td className="py-1.5 pr-4 font-mono text-xs text-amber-900 dark:text-amber-200">
                      {change.to}
                    </td>
                    <td className="py-1.5 text-xs text-amber-800 dark:text-amber-300">
                      {change.note ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="pb-24 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6">
          {CHEATSHEET_GROUPS.map((group) => (
            <div
              key={group.slug}
              className="group-card rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {group.title}
              </h2>
              <ul className="space-y-2.5">
                {group.entries.map((entry) => (
                  <li key={entry.class}>
                    <code className="block font-mono text-xs text-indigo-700 dark:text-indigo-400 break-words">
                      {entry.class}
                    </code>
                    <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {entry.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
