import SidebarNavContent from "./SidebarNavContent";

type NavItem = { slug: string; title: string };

export default function Sidebar({ items }: { items: NavItem[] }) {
  return (
    <aside className="print:hidden hidden lg:block w-56 shrink-0">
      <nav className="sticky top-6 py-10 pr-4">
        <SidebarNavContent items={items} />
      </nav>
    </aside>
  );
}
