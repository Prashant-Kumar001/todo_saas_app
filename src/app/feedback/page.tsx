"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitFeedback = async () => {
    setLoading(true);

    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        message,
        rating,
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setMessage("");
      setRating(null);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-4">Give Feedback</h1>
      <p className="text-gray-500 mb-6">Help us improve the product.</p>

      <Textarea
        placeholder="Write your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-4"
      />

      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((r) => (
          <button
            key={r}
            onClick={() => setRating(r)}
            className={`px-3 py-1 rounded border ${
              rating === r ? "bg-black text-white" : ""
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <Button onClick={submitFeedback} disabled={loading}>
        {loading ? "Sending..." : "Submit Feedback"}
      </Button>

      {success && (
        <p className="text-green-600 mt-4">Thanks for your feedback!</p>
      )}
    </div>
  );
}
