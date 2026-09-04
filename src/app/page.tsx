import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { SearchProvider } from "@/components/SearchContext";
import { SectionCollapseProvider } from "@/components/SectionCollapseContext";
import CollapseAllControls from "@/components/CollapseAllControls";
import BreakingChangesSection from "@/components/BreakingChangesSection";
import GroupSection from "@/components/GroupSection";
import NoResultsNotice from "@/components/NoResultsNotice";
import { CHEATSHEET_GROUPS, V4_BREAKING_CHANGES, LAST_UPDATED } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Extended)",
  description:
    "An up-to-date, printable Tailwind CSS v4 utility class reference, grouped by category.",
};

const GROUP_NAV_ITEMS = CHEATSHEET_GROUPS.map((group) => ({ slug: group.slug, title: group.title }));

const LAST_UPDATED_LABEL = new Date(`${LAST_UPDATED}T00:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tailwind CSS v4 Cheatsheet — Extended",
  description:
    "An up-to-date, printable Tailwind CSS v4 utility class reference, grouped by category.",
  url: "https://tailwindcss.imatlas.dev/",
  dateModified: LAST_UPDATED,
  isPartOf: {
    "@type": "WebSite",
    name: "Tailwind CSS v4 Cheatsheet",
    url: "https://tailwindcss.imatlas.dev",
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v3?: string }>;
}) {
  const params = await searchParams;
  const hideBreakingChanges = params.v3 === "0";
  const changes = hideBreakingChanges ? [] : V4_BREAKING_CHANGES;
  const navItems = hideBreakingChanges
    ? GROUP_NAV_ITEMS
    : [{ slug: "changed-since-v3", title: "Changed since v3" }, ...GROUP_NAV_ITEMS];

  return (
    <SearchProvider>
      <SectionCollapseProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex-1 flex flex-col">
          <TopNav active="extended" navItems={navItems} />

          <div className="mx-auto w-full max-w-7xl px-6 flex-1 lg:flex lg:gap-10">
            <Sidebar items={navItems} />

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
                <div className="mt-5 flex items-center justify-between print:hidden">
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    Last updated: {LAST_UPDATED_LABEL}
                  </p>
                  <CollapseAllControls />
                </div>
              </header>

              <BreakingChangesSection changes={changes} />

              <div className="pb-24 print:pb-6 flex flex-col gap-10 print:gap-3">
                <NoResultsNotice groups={CHEATSHEET_GROUPS} changes={changes} />
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
      </SectionCollapseProvider>
    </SearchProvider>
  );
}
