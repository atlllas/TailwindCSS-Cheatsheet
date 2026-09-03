import Link from "next/link";
import PrintButton from "./PrintButton";

const PDF_FILE: Record<"extended" | "condensed", string> = {
  extended: "/pdf/tailwind-v4-cheatsheet-extended.pdf",
  condensed: "/pdf/tailwind-v4-cheatsheet-condensed.pdf",
};

export default function TopNav({ active }: { active: "extended" | "condensed" }) {
  return (
    <nav className="print:hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-neutral-900 dark:text-neutral-100">
          Tailwind CSS v4 Cheatsheet
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className={`rounded-md px-3 py-1.5 ${
              active === "extended"
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            }`}
          >
            Extended
          </Link>
          <Link
            href="/condensed"
            className={`rounded-md px-3 py-1.5 ${
              active === "condensed"
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            }`}
          >
            Condensed
          </Link>
          <a
            href={PDF_FILE[active]}
            download
            className="rounded-md px-3 py-1.5 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>
    </nav>
  );
}
