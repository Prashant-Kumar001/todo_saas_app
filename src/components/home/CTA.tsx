"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function CTA() {
  const { isSignedIn } = useUser();

  return (
    <section className="py-24 px-6  border-b">
      <h2 className="text-4xl font-bold mb-4">
        Stay organized. Get more done.
      </h2>

      <p className="text-muted-foreground mb-8">
        Manage your tasks with our powerful Todo SaaS.
      </p>

      {isSignedIn ? (
        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link
          href="/sign-up"
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Get Started Free
        </Link>
      )}
    </section>
  );
}