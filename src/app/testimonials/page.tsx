import { prisma } from "@/lib/prisma";

export default async function TestimonialsPage() {
  const feedbacks = await prisma.feedback.findMany({
    where: {
      approved: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 12,
  });

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        What Our Users Say
      </h1>

      <p className="text-center text-muted-foreground mb-12">
        Real feedback from people using our Todo SaaS.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-lg mb-4">“{f.message}”</p>

            {f.rating && (
              <p className="text-yellow-500 text-sm">{"⭐".repeat(f.rating)}</p>
            )}

            <p className="text-xs text-muted-foreground mt-4">
              {new Date(f.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {feedbacks.length === 0 && (
        <p className="text-center text-muted-foreground">
          No testimonials yet.
        </p>
      )}
    </div>
  );
}
