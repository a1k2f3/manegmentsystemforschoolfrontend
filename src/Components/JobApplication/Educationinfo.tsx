import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EducationInfo: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
        Educational Background
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Highest Qualification" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="university" value={formData.university} onChange={handleChange} placeholder="University / Board" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="yearOfPassing" value={formData.yearOfPassing} onChange={handleChange} placeholder="Year of Passing" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA / Percentage" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
      </div>
    </div>
  );
};
