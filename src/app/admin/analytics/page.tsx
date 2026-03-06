import { prisma } from "@/lib/prisma";
import { StatsCard } from "@/components/admin/StatsCard";

export default async function AnalyticsPage() {
  const users = await prisma.user.count();
  const todos = await prisma.todo.count();
  const feedback = await prisma.feedback.count();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Analytics</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard title="Users" value={users} />

        <StatsCard title="Todos" value={todos} />

        <StatsCard title="Feedback" value={feedback} />
      </div>
    </div>
  );
}
