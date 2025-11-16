"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function FormContainer({ children, title, subtitle }: Props) {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white/80 backdrop-blur rounded-3xl shadow-md border border-gray-100">
      {title && <h1 className="text-2xl font-bold text-orange-600 mb-1">{title}</h1>}
      {subtitle && <p className="text-sm text-gray-500 mb-6">{subtitle}</p>}
      <div className="space-y-6">{children}</div>
    </div>
  );
}
