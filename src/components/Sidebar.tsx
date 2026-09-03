type NavItem = { slug: string; title: string };

export default function Sidebar({ items }: { items: NavItem[] }) {
  return (
    <aside className="print:hidden hidden lg:block w-56 shrink-0">
      <nav className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto py-10 pr-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
          On this page
        </p>
        <ul className="space-y-0.5 text-sm">
          {items.map((item) => (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                className="block rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-neutral-400 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
