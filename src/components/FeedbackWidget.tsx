"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";

export const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <div className="flex flex-col items-start gap-2 text-stone-700">
      <span className="text-sm">Was this page helpful?</span>
      {feedback ? (
        <div className={cn("flex items-center gap-2 text-sm text-[#C0581A]", "animate-fade-in")}>
          <CheckCircle className="h-4 w-4" />
          Thanks for your feedback!
        </div>
      ) : (
        <div className="flex gap-2 animate-fade-in">
          <button
            onClick={() => setFeedback("yes")}
            className={cn(
              "flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm",
              "transition-all duration-200 ease-out hover:scale-105 active:scale-95",
              "border-stone-300 hover:border-[#C0581A] hover:text-[#C0581A] hover:bg-orange-50"
            )}
          >
            <ThumbsUp className="h-4 w-4" /> Yes
          </button>
          <button
            onClick={() => setFeedback("no")}
            className={cn(
              "flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm",
              "transition-all duration-200 ease-out hover:scale-105 active:scale-95",
              "border-stone-300 hover:border-stone-400 hover:bg-stone-50"
            )}
          >
            <ThumbsDown className="h-4 w-4" /> No
          </button>
        </div>
      )}
    </div>
  );
};
