"use client";

import { useState, useTransition } from "react";

type Props = {
  id: string;
  initialFlag: "APPROVE" | "REJECT";
};

export function ApproveButton({ id, initialFlag }: Props) {
  const [flag, setFlag] = useState(initialFlag);
  const [pending, startTransition] = useTransition();

  const toggleStatus = async () => {
    const next = flag === "APPROVE" ? "REJECT" : "APPROVE";
    setFlag(next);

    startTransition(async () => {
      try {
        await fetch(
          next === "APPROVE"
            ? "/api/admin/feedback/approve"
            : "/api/admin/feedback/reject",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          },
        );
      } catch (err) {
        console.error(err);
        setFlag(flag);
      }
    });
  };

  return (
    <button
      onClick={toggleStatus}
      disabled={pending}
      className={`px-3 py-1 text-sm rounded transition
      ${
        flag === "APPROVE"
          ? "bg-green-500 hover:bg-green-600 text-white"
          : "bg-red-500 hover:bg-red-600 text-white"
      }
      ${pending ? "opacity-60" : ""}
      `}
    >
      {pending ? "Updating..." : flag === "APPROVE" ? "Approved" : "Rejected"}
    </button>
  );
}
