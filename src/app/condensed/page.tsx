import type { Metadata } from "next";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import { SearchProvider } from "@/components/SearchContext";
import CondensedGroupCard from "@/components/CondensedGroupCard";
import NoResultsNotice from "@/components/NoResultsNotice";
import { CONDENSED_GROUPS, LAST_UPDATED } from "@/lib/cheatsheet-data";

export const metadata: Metadata = {
  title: "Tailwind CSS v4 Cheatsheet (Condensed)",
  description:
    "A 1-2 page printable quick reference of the most-used Tailwind CSS v4 utility classes.",
};

const LAST_UPDATED_LABEL = new Date(`${LAST_UPDATED}T00:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tailwind CSS v4 Cheatsheet — Condensed",
  description:
    "A 1-2 page printable quick reference of the most-used Tailwind CSS v4 utility classes.",
  url: "https://tailwindcss.imatlas.dev/condensed",
  dateModified: LAST_UPDATED,
  isPartOf: {
    "@type": "WebSite",
    name: "Tailwind CSS v4 Cheatsheet",
    url: "https://tailwindcss.imatlas.dev",
  },
};

const NAV_ITEMS = CONDENSED_GROUPS.map((group) => ({
  slug: group.slug,
  title: group.title,
}));

// Split by hand (rather than a plain half/half slice) so both printed
// columns end up roughly the same height — group entry counts vary a lot.
const LEFT_SLUGS = [
  "spacing-sizing",
  "backgrounds-borders",
  "positioning-display",
  "transforms-interactivity",
];

export default function Condensed() {
  const leftGroups = CONDENSED_GROUPS.filter((g) => LEFT_SLUGS.includes(g.slug));
  const rightGroups = CONDENSED_GROUPS.filter((g) => !LEFT_SLUGS.includes(g.slug));

  return (
    <SearchProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-1 flex flex-col">
        <TopNav active="condensed" navItems={NAV_ITEMS} />

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
                <Link href="/" className="text-sky-600 dark:text-sky-400 hover:underline">
                  See the extended cheatsheet
                </Link>
                .
              </p>
              <p className="mt-5 text-xs text-neutral-400 dark:text-neutral-500 print:hidden">
                Last updated: {LAST_UPDATED_LABEL}
              </p>
            </header>

            <div className="pb-24 print:pb-6">
              <NoResultsNotice groups={CONDENSED_GROUPS} />
              <section className="flex flex-col md:flex-row print:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-5">
                  {leftGroups.map((group) => (
                    <CondensedGroupCard key={group.slug} group={group} />
                  ))}
                </div>
                <div className="flex-1 flex flex-col gap-5">
                  {rightGroups.map((group) => (
                    <CondensedGroupCard key={group.slug} group={group} />
                  ))}
                </div>
              </section>
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
