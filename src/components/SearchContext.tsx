"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type SearchContextValue = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextValue>({
  query: "",
  setQuery: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;

      const inputs = document.querySelectorAll<HTMLInputElement>("[data-search-input]");
      for (const input of inputs) {
        if (input.offsetParent !== null) {
          e.preventDefault();
          input.focus();
          break;
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function matches(query: string, ...fields: string[]) {
  if (!query.trim()) return true;
  const needle = query.trim().toLowerCase();
  return fields.some((field) => field.toLowerCase().includes(needle));
}
