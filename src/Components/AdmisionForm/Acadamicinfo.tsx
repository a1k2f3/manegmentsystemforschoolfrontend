import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AcademicInfo: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Academic Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="Previous School" className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="lastGrade" value={formData.lastGrade} onChange={handleChange} placeholder="Last Grade" className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
      </div>
    </div>
  );
};
