import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { SearchProvider } from "@/components/SearchContext";
import BreakingChangesSection from "@/components/BreakingChangesSection";
import GroupSection from "@/components/GroupSection";
import NoResultsNotice from "@/components/NoResultsNotice";
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
    <SearchProvider>
      <div className="flex-1 flex flex-col">
        <TopNav active="extended" navItems={NAV_ITEMS} />

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
                <Link href="/condensed" className="text-sky-600 dark:text-sky-400 hover:underline">
                  Try the condensed version
                </Link>
                .
              </p>
            </header>

            <BreakingChangesSection changes={V4_BREAKING_CHANGES} />

            <div className="pb-24 print:pb-6 flex flex-col gap-10 print:gap-3">
              <NoResultsNotice groups={CHEATSHEET_GROUPS} changes={V4_BREAKING_CHANGES} />
              {CHEATSHEET_GROUPS.map((group) => (
                <GroupSection key={group.slug} group={group} />
              ))}
            </div>

            <p className="hidden print:block pt-2 text-center text-[9px] text-neutral-400">
              imatlas.dev — made with {"<3"}
            </p>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}
