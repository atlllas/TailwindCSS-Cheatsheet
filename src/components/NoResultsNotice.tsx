"use client";

import type { CheatGroup, BreakingChange } from "@/lib/cheatsheet-data";
import { useSearch, matches } from "./SearchContext";

export default function NoResultsNotice({
  groups,
  changes,
}: {
  groups: CheatGroup[];
  changes?: BreakingChange[];
}) {
  const { query } = useSearch();
  if (!query.trim()) return null;

  const anyGroupMatch = groups.some((group) =>
    group.entries.some((entry) => matches(query, entry.class, entry.description)),
  );
  const anyChangeMatch =
    changes?.some((change) => matches(query, change.from, change.to, change.note ?? "")) ?? false;

  if (anyGroupMatch || anyChangeMatch) return null;

  return (
    <div className="print:hidden rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
      No utilities match &ldquo;{query}&rdquo;.
    </div>
  );
}
