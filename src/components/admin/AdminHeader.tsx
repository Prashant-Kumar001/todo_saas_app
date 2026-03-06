import { UserButton } from "@clerk/nextjs";

export default function AdminHeader() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h1 className="font-semibold">Admin Dashboard</h1>

      <UserButton afterSignOutUrl="/" />
    </header>
  );
}
