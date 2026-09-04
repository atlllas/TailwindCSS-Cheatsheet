"use client";

import type { CheatGroup } from "@/lib/cheatsheet-data";
import { useSearch, matches } from "./SearchContext";
import CopyableEntry from "./CopyableEntry";
import CategoryIcon from "./CategoryIcon";

export default function CondensedGroupCard({ group }: { group: CheatGroup }) {
  const { query } = useSearch();
  const entries = group.entries.filter((entry) =>
    matches(query, entry.class, entry.description),
  );

  if (entries.length === 0) return null;

  return (
    <div
      id={group.slug}
      className="group-card scroll-mt-6 break-inside-avoid rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 compact:p-3 print:p-3 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <h2 className="section-heading flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4 compact:mb-2 print:mb-1.5 print:text-sm">
        <CategoryIcon slug={group.slug} className="h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400 print:hidden" />
        {group.title}
      </h2>
      <ul className="space-y-2.5 compact:space-y-1.5 print:space-y-1">
        {entries.map((entry) => (
          <li key={entry.class}>
            <CopyableEntry
              text={entry.class}
              description={entry.description}
              codeClassName="block font-mono text-xs print:text-[10px] text-sky-600 dark:text-sky-400 break-words"
              descriptionClassName="block text-xs compact:hidden print:text-[9px] text-neutral-500 dark:text-neutral-400 mt-0.5 print:mt-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
