import { prisma } from "@/lib/prisma";
import { StatsCard } from "@/components/admin/StatsCard";

export default async function AdminDashboard() {
  const users = await prisma.user.count();
  const todos = await prisma.todo.count();
  const feedback = await prisma.feedback.count();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard title="Total Users" value={users} />

        <StatsCard title="Total Todos" value={todos} />

        <StatsCard title="Feedback Submitted" value={feedback} />
      </div>
    </div>
  );
}
