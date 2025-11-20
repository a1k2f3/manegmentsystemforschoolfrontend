"use client";

import React from "react";

interface AcademicInfoData {
  affiliationBoard?: string;
  accreditationNumber?: string;
  totalStudents?: string;
  totalTeachers?: string;
}

interface Props {
  formData: AcademicInfoData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AcademicInfo({ formData, handleChange }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Accreditation & Capacity</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="affiliationBoard"
          value={formData.affiliationBoard || ""}
          onChange={handleChange}
          placeholder="Affiliation / Board"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="accreditationNumber"
          value={formData.accreditationNumber || ""}
          onChange={handleChange}
          placeholder="Accreditation / License #"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="totalStudents"
          value={formData.totalStudents || ""}
          onChange={handleChange}
          placeholder="Total Students"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="totalTeachers"
          value={formData.totalTeachers || ""}
          onChange={handleChange}
          placeholder="Total Teachers"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
}
