import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import { CONDENSED_GROUPS } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Condensed)",
  description:
    "A 1-2 page printable quick reference of the most-used Tailwind CSS v4 utility classes.",
};

function Column({ groups }: { groups: typeof CONDENSED_GROUPS }) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {groups.map((group) => (
        <div
          key={group.slug}
          className="group-card break-inside-avoid rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2.5">
            {group.title}
          </h2>
          <ul className="space-y-2">
            {group.entries.map((entry) => (
              <li key={entry.class}>
                <code className="block font-mono text-[11px] leading-snug text-indigo-700 dark:text-indigo-400 break-words">
                  {entry.class}
                </code>
                <span className="block text-[11px] leading-snug text-neutral-500 dark:text-neutral-400">
                  {entry.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Split by hand (rather than a plain half/half slice) so both printed
// columns end up roughly the same height — group entry counts vary a lot.
const LEFT_SLUGS = ["spacing-sizing", "backgrounds-borders", "states-responsive"];

export default function Condensed() {
  const leftGroups = CONDENSED_GROUPS.filter((g) => LEFT_SLUGS.includes(g.slug));
  const rightGroups = CONDENSED_GROUPS.filter((g) => !LEFT_SLUGS.includes(g.slug));

  return (
    <div className="flex-1 flex flex-col">
      <TopNav active="condensed" />

      <div className="mx-auto w-full max-w-5xl px-6 flex-1">
        <header className="pt-10 pb-6 print:pt-0 print:pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Tailwind CSS v4 — Quick Reference
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
            The utilities you reach for every day, on one printable page.
            Need the full list?{" "}
            <Link href="/" className="underline">
              See the extended cheatsheet
            </Link>
            .
          </p>
        </header>

        <section className="pb-16 flex flex-col md:flex-row print:flex-row gap-5">
          <Column groups={leftGroups} />
          <Column groups={rightGroups} />
        </section>
      </div>
    </div>
  );
}
