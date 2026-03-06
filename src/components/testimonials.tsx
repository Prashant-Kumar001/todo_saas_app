import { IFeedback } from "@/types";


export function Testimonials({ testimonials }: { testimonials: IFeedback[] }) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        What our users say
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="border rounded-xl p-6 bg-muted/30">
            <p className="mb-4">“{t.message}”</p>

            {t.rating && (
              <p className="text-yellow-500">{"⭐".repeat(t.rating)}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
