import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const ExperienceInfo: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
        Work Experience
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="lastJob" value={formData.lastJob} onChange={handleChange} placeholder="Last Job Title" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
      </div>
      <textarea
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="List your key skills or subjects you can teach"
        className="input mt-3 h-24 input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
  );
};
