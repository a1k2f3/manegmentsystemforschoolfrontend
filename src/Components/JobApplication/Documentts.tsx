import React from "react";

interface Props {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DocumentUpload: React.FC<Props> = ({ handleFileChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Document Uploads</h2>
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="cv" className="block font-medium text-gray-700 mb-1">
            Curriculum Vitae (CV)
          </label>
          <input id="cv" type="file" name="cv" onChange={handleFileChange} className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        </div>
        <div>
          <label htmlFor="degree" className="block font-medium text-gray-700 mb-1">
            Degree / Transcript
          </label>
          <input id="degree" type="file" name="degree" onChange={handleFileChange} className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition " />
        </div>
        <div>
          <label htmlFor="photo" className="block font-medium text-gray-700 mb-1">
            Passport-size Photo
          </label>
          <input id="photo" type="file" name="photo" onChange={handleFileChange} className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        </div>
      </div>
    </div>
  );
};
