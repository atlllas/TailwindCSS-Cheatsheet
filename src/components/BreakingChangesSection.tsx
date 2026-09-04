"use client";

import type { BreakingChange } from "@/lib/cheatsheet-data";
import { useSearch, matches } from "./SearchContext";
import CategoryIcon from "./CategoryIcon";

export default function BreakingChangesSection({ changes }: { changes: BreakingChange[] }) {
  const { query } = useSearch();
  const rows = changes.filter((change) =>
    matches(query, change.from, change.to, change.note ?? ""),
  );

  if (rows.length === 0) return null;

  return (
    <section
      id="changed-since-v3"
      className="scroll-mt-6 mb-12 print:mb-4 rounded-lg border border-amber-300 bg-amber-50 p-5 print:p-3 dark:border-amber-900 dark:bg-amber-950/40"
    >
      <h2 className="section-heading flex items-center gap-2 text-lg font-semibold text-amber-900 dark:text-amber-200 print:text-sm">
        <CategoryIcon slug="changed-since-v3" className="h-4 w-4 shrink-0 print:hidden" />
        Changed since v3
      </h2>
      <p className="mt-1 text-sm text-amber-800 dark:text-amber-300 print:hidden">
        The most common source of outdated cheatsheets: these utilities were
        renamed or changed behavior in v4.
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
            {rows.map((change) => (
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
  );
}
