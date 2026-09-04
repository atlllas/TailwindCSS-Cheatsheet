import { NextResponse } from "next/server";
import {
  CHEATSHEET_GROUPS,
  CONDENSED_GROUPS,
  V4_BREAKING_CHANGES,
  LAST_UPDATED,
} from "@/lib/cheatsheet-data";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    lastUpdated: LAST_UPDATED,
    source: "https://tailwindcss.imatlas.dev",
    breakingChanges: V4_BREAKING_CHANGES,
    extended: CHEATSHEET_GROUPS,
    condensed: CONDENSED_GROUPS,
  });
}
