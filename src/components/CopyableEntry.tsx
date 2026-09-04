"use client";

import { useState } from "react";

export default function CopyableEntry({
  text,
  description,
  codeClassName,
  descriptionClassName,
}: {
  text: string;
  description: string;
  codeClassName: string;
  descriptionClassName: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard unavailable — nothing sensible to do
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group/copy block w-full text-left print:pointer-events-none"
    >
      <span className="flex items-center gap-1.5">
        <code className={codeClassName}>{text}</code>
        <span
          className="print:hidden shrink-0 text-[10px] text-neutral-400 opacity-0 transition-opacity group-hover/copy:opacity-100 dark:text-neutral-500"
          aria-hidden="true"
        >
          {copied ? "Copied" : "Copy"}
        </span>
      </span>
      <span className={descriptionClassName}>{description}</span>
    </button>
  );
}
