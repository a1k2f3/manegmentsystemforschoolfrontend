"use client";

import React from "react";

interface Props {
  formData: any;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DocumentsUpload({ formData, handleFileChange }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">School Documents</h3>
      <div className="grid grid-cols-1 gap-4">
        <label className="text-sm text-gray-600">Registration / License Certificate</label>
        <input type="file" name="registrationCertificate" onChange={handleFileChange} className="w-full" />

        <label className="text-sm text-gray-600">No Objection Certificate (if any)</label>
        <input type="file" name="noc" onChange={handleFileChange} className="w-full" />

        <label className="text-sm text-gray-600">School Logo (optional)</label>
        <input type="file" name="logo" onChange={handleFileChange} className="w-full" />
      </div>
    </div>
  );
}
