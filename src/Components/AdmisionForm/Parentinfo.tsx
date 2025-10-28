import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ParentInfo: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 mb-8 hover:shadow-lg transition-all duration-200">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 border-blue-100 pb-3">Parent / Guardian Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="father"
          value={formData.father}
          onChange={handleChange}
          placeholder="Father's Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="mother"
          value={formData.mother}
          onChange={handleChange}
          placeholder="Mother's Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          name="parentContact"
          value={formData.parentContact}
          onChange={handleChange}
          placeholder="Parent Contact"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </div>
  );
};
