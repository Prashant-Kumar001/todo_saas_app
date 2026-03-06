"use client";

import { useTransition } from "react";

export function ApproveButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  const approve = async () => {
    await fetch("/api/admin/feedback/approve", {
      method: "PATCH",
      body: JSON.stringify({ id }),
    });
  };

  return (
    <button
      onClick={() => startTransition(approve)}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      {pending ? "Approving..." : "Approve"}
    </button>
  );
}
