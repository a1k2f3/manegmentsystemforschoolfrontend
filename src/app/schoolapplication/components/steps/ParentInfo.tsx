"use client";

import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function ParentInfo({ formData, handleChange }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact & Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="principalName" value={formData.principalName || ""} onChange={handleChange} placeholder="Principal / Head Name" className="w-full px-4 py-2 border rounded-lg" />
        <input name="principalEmail" value={formData.principalEmail || ""} onChange={handleChange} placeholder="Principal Email" className="w-full px-4 py-2 border rounded-lg" />
        <input name="contactPhone" value={formData.contactPhone || ""} onChange={handleChange} placeholder="Contact Phone" className="w-full px-4 py-2 border rounded-lg" />
        <input name="website" value={formData.website || ""} onChange={handleChange} placeholder="Website (optional)" className="w-full px-4 py-2 border rounded-lg" />
      </div>
    </div>
  );
}
