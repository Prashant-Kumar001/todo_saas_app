"use client";

import { userClient } from "@/lib/userClient";
import { IFeedback } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Testimonials } from "../testimonials";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<IFeedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTestimonials = async () => {
    try {
      const res = await userClient.getTestimonial(4);

      if (res.success && res.data) {
        setTestimonials(res.data);
      } else {
        setError(res.error || "Failed to fetch testimonials");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-white border-b">
        <p className="text-muted-foreground">Loading testimonials...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">{error}</section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-24 px-6 bg-white border-b">
        <h2 className="text-2xl font-semibold mb-3">No testimonials yet</h2>

        <p className="text-muted-foreground mb-6">
          Be the first to share your experience with our Todo SaaS.
        </p>

        <Link
          href="/feedback"
          className="px-5 py-2 rounded-lg bg-black text-white"
        >
          Give Feedback
        </Link>
      </section>
    );
  }

  return <Testimonials testimonials={testimonials} />;
};

export default Testimonial;
