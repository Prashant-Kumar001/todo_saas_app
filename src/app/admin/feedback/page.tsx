import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/isAdmin";
import { redirect } from "next/navigation";
import { ApproveButton } from "@/components/admin/ApproveButton";

export default async function AdminFeedbackPage() {
  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  const feedbacks = await prisma.feedback.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-10">Feedback Management</h1>

      <div className="space-y-6">
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className="border rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <p className="mb-2">{f.message}</p>

              {f.rating && (
                <p className="text-yellow-500">{"⭐".repeat(f.rating)}</p>
              )}
            </div>

            <div className="flex gap-3">
              {!f.approved && <ApproveButton id={f.id} />}

              {f.approved && <span className="text-green-600">Approved</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
