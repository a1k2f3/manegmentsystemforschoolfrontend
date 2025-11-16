"use client";

import React from "react";

interface Props {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
}

export default function StepNav({ step, total, onPrev, onNext, isNextDisabled }: Props) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const idx = i + 1;
          return (
            <div
              key={i}
              className={`w-8 h-2 rounded-full ${idx <= step ? "bg-orange-500" : "bg-gray-200"}`}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onPrev}
          disabled={step === 1}
          className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!!isNextDisabled}
          className="px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          {step === total ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
