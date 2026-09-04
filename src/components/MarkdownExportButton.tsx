"use client";

import {
  CHEATSHEET_GROUPS,
  CONDENSED_GROUPS,
  V4_BREAKING_CHANGES,
  LAST_UPDATED,
  type CheatGroup,
} from "@/lib/cheatsheet-data";

function groupsToMarkdown(groups: CheatGroup[]): string {
  return groups
    .map((group) => {
      const entries = group.entries
        .map((entry) => `- \`${entry.class}\` — ${entry.description}`)
        .join("\n");
      return `## ${group.title}\n\n${entries}`;
    })
    .join("\n\n");
}

function buildExtendedMarkdown(): string {
  const changesTable = [
    "| v3 | v4 | Note |",
    "| --- | --- | --- |",
    ...V4_BREAKING_CHANGES.map(
      (c) => `| \`${c.from}\` | \`${c.to}\` | ${c.note ?? ""} |`,
    ),
  ].join("\n");

  return [
    "# Tailwind CSS v4 Cheatsheet — Extended",
    "",
    `_Last updated: ${LAST_UPDATED}_`,
    "",
    "## Changed since v3",
    "",
    changesTable,
    "",
    groupsToMarkdown(CHEATSHEET_GROUPS),
    "",
  ].join("\n");
}

function buildCondensedMarkdown(): string {
  return [
    "# Tailwind CSS v4 Cheatsheet — Quick Reference",
    "",
    `_Last updated: ${LAST_UPDATED}_`,
    "",
    groupsToMarkdown(CONDENSED_GROUPS),
    "",
  ].join("\n");
}

const FILE_NAME: Record<"extended" | "condensed", string> = {
  extended: "tailwind-v4-cheatsheet-extended.md",
  condensed: "tailwind-v4-cheatsheet-condensed.md",
};

export default function MarkdownExportButton({ active }: { active: "extended" | "condensed" }) {
  function handleClick() {
    const markdown = active === "extended" ? buildExtendedMarkdown() : buildCondensedMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = FILE_NAME[active];
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
    >
      Markdown
    </button>
  );
}
