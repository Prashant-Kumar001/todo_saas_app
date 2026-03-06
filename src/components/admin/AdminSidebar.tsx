import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "Users", href: "/admin/users" },
  { name: "Todos", href: "/admin/todos" },
  { name: "Feedback", href: "/admin/feedback" },
  { name: "Analytics", href: "/admin/analytics" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 hover:text-black"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
