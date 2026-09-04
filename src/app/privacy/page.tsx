import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Tailwind CSS v4 Cheatsheet handles data, including analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="mx-auto w-full max-w-3xl px-6 flex-1 flex flex-col">
        <main className="pt-24 pb-16 sm:pt-32">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
            <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Privacy Policy
            </h1>
            <p className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              Last updated: September 2026
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                This site doesn&apos;t require an account, and we don&apos;t
                collect an email address, a name, or any other personal data.
              </p>
              <p>
                Browsing the cheatsheet and downloading a PDF or Markdown
                file both happen entirely in{" "}
                <span className="text-neutral-900 dark:text-neutral-100">
                  your browser
                </span>{" "}
                — that content is never sent to a server.
              </p>
              <p>
                We use{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener"
                  className="text-sky-600 hover:underline dark:text-sky-400"
                >
                  Google Analytics
                </a>{" "}
                to see aggregate usage — which pages get visited and roughly
                how many people use the site. It sets cookies and collects
                things like your approximate location, device/browser type,
                and pages viewed. We don&apos;t use it to identify you
                individually, and this site has no ads.
              </p>
              <p>
                The infrastructure hosting the site (Vercel) may keep standard
                server logs (such as IP address and browser info). We
                don&apos;t have access to this data — it&apos;s limited to
                the infrastructure provider&apos;s own security and
                performance purposes.
              </p>
              <p>
                For questions, you can reach us via{" "}
                <a
                  href="https://imatlas.dev"
                  target="_blank"
                  rel="noopener"
                  className="text-sky-600 hover:underline dark:text-sky-400"
                >
                  imatlas.dev
                </a>
                .
              </p>
            </div>

            <Link
              href="/"
              className="mt-8 inline-block font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              ← Back to home
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
