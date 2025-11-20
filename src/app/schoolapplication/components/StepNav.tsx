// src/components/StepNav.tsx
"use client";

import React from "react";

interface StepNavProps {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isNextDisabled?: boolean;
  isSubmit?: boolean;
}

export default function StepNav({
  step,
  total,
  onPrev,
  onNext,
  isNextDisabled = false,
  isSubmit = false,
}: StepNavProps) {
  return (
    <div className="mt-10 flex justify-between items-center">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrev}
        disabled={step === 1}
        className={`px-6 py-3 rounded-lg font-medium transition-all ${
          step === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-600 text-white hover:bg-gray-700"
        }`}
      >
        Previous
      </button>

      {/* Step Indicator */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i + 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              step === i + 1
                ? "bg-blue-600 text-white"
                : step > i + 1
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Next / Submit Button */}
      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        className={`px-8 py-3 rounded-lg font-semibold transition-all ${
          isNextDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isSubmit
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isSubmit ? "Submit Application" : "Next"}
      </button>
    </div>
  );
}