"use client";

import { useSectionCollapseControls } from "./SectionCollapseContext";

export default function CollapseAllControls() {
  const { expandAll, collapseAll } = useSectionCollapseControls();

  return (
    <div className="print:hidden flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
      <button
        type="button"
        onClick={expandAll}
        className="hover:text-sky-600 dark:hover:text-sky-400 hover:underline"
      >
        Expand all
      </button>
      <span aria-hidden="true">·</span>
      <button
        type="button"
        onClick={collapseAll}
        className="hover:text-sky-600 dark:hover:text-sky-400 hover:underline"
      >
        Collapse all
      </button>
    </div>
  );
}
