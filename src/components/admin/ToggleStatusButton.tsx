"use client";

import { useTransition } from "react";

export default function ToggleStatusButton({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const [pending, startTransition] = useTransition();

  const toggle = async () => {
    await fetch("/api/admin/todos/toggle", {
      method: "PATCH",
      body: JSON.stringify({ id }),
    });
  };

  return (
    <button
      onClick={() => startTransition(toggle)}
      className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
    >
      {pending
        ? "Updating..."
        : status === "COMPLETED"
          ? "Mark Pending"
          : "Mark Done"}
    </button>
  );
}
