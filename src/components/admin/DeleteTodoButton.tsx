"use client";

import { useTransition } from "react";

export default function DeleteTodoButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();

  const remove = async () => {
    await fetch("/api/admin/todos/delete", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  };

  return (
    <button
      onClick={() => startTransition(remove)}
      className="px-3 py-1 text-sm bg-red-500 text-white rounded"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
