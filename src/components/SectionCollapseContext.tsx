"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Command = { type: "expand" | "collapse"; token: number } | null;

type SectionCollapseCtx = {
  command: Command;
  expandAll: () => void;
  collapseAll: () => void;
};

const SectionCollapseContext = createContext<SectionCollapseCtx | null>(null);

export function SectionCollapseProvider({ children }: { children: ReactNode }) {
  const [command, setCommand] = useState<Command>(null);

  const expandAll = useCallback(() => setCommand({ type: "expand", token: Date.now() }), []);
  const collapseAll = useCallback(() => setCommand({ type: "collapse", token: Date.now() }), []);

  return (
    <SectionCollapseContext.Provider value={{ command, expandAll, collapseAll }}>
      {children}
    </SectionCollapseContext.Provider>
  );
}

export function useSectionCollapseControls() {
  const ctx = useContext(SectionCollapseContext);
  if (!ctx) throw new Error("useSectionCollapseControls must be used within SectionCollapseProvider");
  return { expandAll: ctx.expandAll, collapseAll: ctx.collapseAll };
}

// Local open/closed state that also obeys the last "expand all" / "collapse
// all" click from anywhere else on the page, without forcing every section
// to share one global boolean (each keeps its own default and can be
// toggled individually in between).
export function useCollapsible(defaultOpen: boolean) {
  const ctx = useContext(SectionCollapseContext);
  const [open, setOpen] = useState(defaultOpen);
  const lastToken = useRef<number | null>(null);

  useEffect(() => {
    if (ctx?.command && ctx.command.token !== lastToken.current) {
      lastToken.current = ctx.command.token;
      setOpen(ctx.command.type === "expand");
    }
  }, [ctx?.command]);

  return [open, setOpen] as const;
}
