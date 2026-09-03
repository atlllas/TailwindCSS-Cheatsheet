import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { CHEATSHEET_GROUPS, V4_BREAKING_CHANGES } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Extended)",
  description:
    "An up-to-date, printable Tailwind CSS v4 utility class reference, grouped by category.",
};

const NAV_ITEMS = [
  { slug: "changed-since-v3", title: "Changed since v3" },
  ...CHEATSHEET_GROUPS.map((group) => ({ slug: group.slug, title: group.title })),
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <TopNav active="extended" />

      <div className="mx-auto w-full max-w-7xl px-6 flex-1 lg:flex lg:gap-10">
        <Sidebar items={NAV_ITEMS} />

        <div className="min-w-0 flex-1">
          <header className="pt-14 pb-10 print:pt-0 print:pb-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 print:text-xl">
              Tailwind CSS v4 Cheatsheet
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl print:hidden">
              Extended, grouped reference for Tailwind CSS v4 utility classes —
              compiled from the official docs so it actually reflects v4, not
              v3. Need something you can keep on your desk?{" "}
              <Link href="/condensed" className="underline">
                Try the condensed version
              </Link>
              .
            </p>
          </header>

          <section
            id="changed-since-v3"
            className="scroll-mt-6 mb-12 print:mb-4 rounded-lg border border-amber-300 bg-amber-50 p-5 print:p-3 dark:border-amber-900 dark:bg-amber-950/40"
          >
            <h2 className="section-heading text-lg font-semibold text-amber-900 dark:text-amber-200 print:text-sm">
              Changed since v3
            </h2>
            <p className="mt-1 text-sm text-amber-800 dark:text-amber-300 print:hidden">
              The most common source of outdated cheatsheets: these utilities
              were renamed or changed behavior in v4.
            </p>
            <div className="mt-4 print:mt-2 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="entry-row text-left text-amber-900/70 dark:text-amber-300/70">
                    <th className="pb-2 print:pb-1 pr-4 font-medium">v3</th>
                    <th className="pb-2 print:pb-1 pr-4 font-medium">v4</th>
                    <th className="pb-2 print:pb-1 font-medium">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-200 dark:divide-amber-900">
                  {V4_BREAKING_CHANGES.map((change) => (
                    <tr key={change.from} className="entry-row">
                      <td className="py-1.5 print:py-0.5 pr-4 font-mono text-xs text-amber-900 dark:text-amber-200">
                        {change.from}
                      </td>
                      <td className="py-1.5 print:py-0.5 pr-4 font-mono text-xs text-amber-900 dark:text-amber-200">
                        {change.to}
                      </td>
                      <td className="py-1.5 print:py-0.5 text-xs text-amber-800 dark:text-amber-300">
                        {change.note ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="pb-24 print:pb-6 flex flex-col gap-10 print:gap-3">
            {CHEATSHEET_GROUPS.map((group) => (
              <section
                key={group.slug}
                id={group.slug}
                className="scroll-mt-6 rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 print:p-3 print:rounded-none print:border-0 print:border-t print:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h2 className="section-heading text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4 print:mb-1.5 print:text-sm print:pt-2">
                  {group.title}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-2 gap-x-8 print:gap-x-6 gap-y-3 print:gap-y-1">
                  {group.entries.map((entry) => (
                    <li key={entry.class} className="entry-row">
                      <code className="block font-mono text-xs print:text-[10px] text-indigo-700 dark:text-indigo-400 break-words">
                        {entry.class}
                      </code>
                      <span className="block text-xs print:text-[9px] text-neutral-500 dark:text-neutral-400 mt-0.5 print:mt-0">
                        {entry.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="hidden print:block pt-2 text-center text-[9px] text-neutral-400">
            imatlas.dev — made with {"<3"}
          </p>
        </div>
      </div>
    </div>
  );
}
