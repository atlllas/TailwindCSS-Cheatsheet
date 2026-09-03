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
                className="block rounded-md px-3 py-1.5 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
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
