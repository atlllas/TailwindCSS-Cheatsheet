"use client";

import type { CheatGroup } from "@/lib/cheatsheet-data";
import { useSearch, matches } from "./SearchContext";
import CopyableEntry from "./CopyableEntry";
import CategoryIcon from "./CategoryIcon";

export default function GroupSection({ group }: { group: CheatGroup }) {
  const { query } = useSearch();
  const entries = group.entries.filter((entry) =>
    matches(query, entry.class, entry.description),
  );

  if (entries.length === 0) return null;

  return (
    <section
      id={group.slug}
      className="scroll-mt-6 rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 print:p-3 print:rounded-none print:border-0 print:border-t print:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <h2 className="section-heading flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4 print:mb-1.5 print:text-sm print:pt-2">
        <CategoryIcon slug={group.slug} className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400 print:hidden" />
        {group.title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-2 gap-x-8 print:gap-x-6 gap-y-3 print:gap-y-1">
        {entries.map((entry) => (
          <li key={entry.class} className="entry-row">
            <CopyableEntry
              text={entry.class}
              description={entry.description}
              codeClassName="block font-mono text-xs print:text-[10px] text-sky-600 dark:text-sky-400 break-words"
              descriptionClassName="block text-xs print:text-[9px] text-neutral-500 dark:text-neutral-400 mt-0.5 print:mt-0"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
