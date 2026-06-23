"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";

export const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <div className="flex flex-col items-center gap-2 text-stone-500">
      <span className="text-xs tracking-widest uppercase">Was this page helpful?</span>
      {feedback ? (
        <div className={cn("flex items-center gap-2 text-xs text-[#C0581A]", "animate-fade-in")}>
          <CheckCircle className="h-4 w-4" />
          Thanks for your feedback!
        </div>
      ) : (
        <div className="flex gap-2 animate-fade-in">
          <button
            onClick={() => setFeedback("yes")}
            className={cn(
              "flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs",
              "transition-all duration-200 ease-out hover:scale-105 active:scale-95",
              "border-stone-700 text-stone-400 hover:border-[#C0581A] hover:text-[#C0581A]"
            )}
          >
            <ThumbsUp className="h-3 w-3" /> Yes
          </button>
          <button
            onClick={() => setFeedback("no")}
            className={cn(
              "flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs",
              "transition-all duration-200 ease-out hover:scale-105 active:scale-95",
              "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-300"
            )}
          >
            <ThumbsDown className="h-3 w-3" /> No
          </button>
        </div>
      )}
    </div>
  );
};
