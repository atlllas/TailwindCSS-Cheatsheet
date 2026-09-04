"use client";

import { useEffect, useState } from "react";

export default function DensityToggle() {
  const [isCompact, setIsCompact] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Reading the DOM class the inline script already set — intentional
    // sync-on-mount, same reasoning as ThemeToggle (avoids hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCompact(document.documentElement.classList.contains("compact"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isCompact;
    setIsCompact(next);
    document.documentElement.classList.toggle("compact", next);
    try {
      localStorage.setItem("density", next ? "compact" : "comfortable");
    } catch {
      // ignore — preference just won't persist across visits
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isCompact ? "Switch to comfortable density" : "Switch to compact density"}
      title={isCompact ? "Comfortable density" : "Compact density"}
      className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-300 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
    >
      {!mounted ? (
        <span className="block h-4 w-4" />
      ) : isCompact ? (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="h-4 w-4">
          <line x1="2" y1="3" x2="14" y2="3" />
          <line x1="2" y1="6.5" x2="14" y2="6.5" />
          <line x1="2" y1="10" x2="14" y2="10" />
          <line x1="2" y1="13.5" x2="14" y2="13.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="h-4 w-4">
          <line x1="2" y1="4" x2="14" y2="4" />
          <line x1="2" y1="8" x2="14" y2="8" />
          <line x1="2" y1="12" x2="14" y2="12" />
        </svg>
      )}
    </button>
  );
}
