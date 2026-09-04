"use client";

import { useEffect, useState } from "react";
import { useSearch } from "./SearchContext";
import CategoryIcon from "./CategoryIcon";

type NavItem = { slug: string; title: string };

export default function SidebarNavContent({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate?: () => void;
}) {
  const { query, setQuery } = useSearch();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 },
    );
    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // Re-attach after a search filter changes which sections exist in the DOM.
  }, [items, query]);

  return (
    <>
      <div className="relative mb-4">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          data-search-input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search classes… (press /)"
          className="w-full rounded-md border border-neutral-200 bg-white py-1.5 pl-8 pr-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
        On this page
      </p>
      <ul className="space-y-0.5 text-sm">
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              onClick={onNavigate}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors ${
                activeSlug === item.slug
                  ? "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300"
                  : "text-neutral-600 hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-400 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
              }`}
            >
              <CategoryIcon slug={item.slug} className="h-3.5 w-3.5 shrink-0 opacity-70" />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
