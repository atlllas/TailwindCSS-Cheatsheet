import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { CONDENSED_GROUPS } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Condensed)",
  description:
    "A 1-2 page printable quick reference of the most-used Tailwind CSS v4 utility classes.",
};

const NAV_ITEMS = CONDENSED_GROUPS.map((group) => ({
  slug: group.slug,
  title: group.title,
}));

function Column({ groups }: { groups: typeof CONDENSED_GROUPS }) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {groups.map((group) => (
        <div
          key={group.slug}
          id={group.slug}
          className="group-card scroll-mt-6 break-inside-avoid rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 print:p-3 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h2 className="section-heading text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4 print:mb-1.5 print:text-sm">
            {group.title}
          </h2>
          <ul className="space-y-2.5 print:space-y-1">
            {group.entries.map((entry) => (
              <li key={entry.class}>
                <code className="block font-mono text-xs print:text-[10px] text-indigo-700 dark:text-indigo-400 break-words">
                  {entry.class}
                </code>
                <span className="block text-xs print:text-[9px] text-neutral-500 dark:text-neutral-400 mt-0.5 print:mt-0">
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

      <div className="mx-auto w-full max-w-7xl px-6 flex-1 lg:flex lg:gap-10">
        <Sidebar items={NAV_ITEMS} />

        <div className="min-w-0 flex-1">
          <header className="pt-14 pb-10 print:pt-0 print:pb-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 print:text-xl">
              Tailwind CSS v4 — Quick Reference
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl print:hidden">
              The utilities you reach for every day, on one printable page.
              Need the full list?{" "}
              <Link href="/" className="underline">
                See the extended cheatsheet
              </Link>
              .
            </p>
          </header>

          <section className="pb-24 print:pb-6 flex flex-col md:flex-row print:flex-row gap-5">
            <Column groups={leftGroups} />
            <Column groups={rightGroups} />
          </section>

          <p className="hidden print:block pt-2 text-center text-[9px] text-neutral-400">
            imatlas.dev — made with {"<3"}
          </p>
        </div>
      </div>
    </div>
  );
}
