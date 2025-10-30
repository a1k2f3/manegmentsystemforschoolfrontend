import type { ReactNode } from 'react';

export default function DashboardCard({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="relative bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-green-400/10 to-transparent opacity-100 blur-2xl pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">{title}</h2>
        {children}
      </div>
    </div>
  );
}
