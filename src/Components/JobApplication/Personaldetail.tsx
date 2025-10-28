import React from "react";

interface Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const PersonalDetails: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
        Personal Details
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Home Address" className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
        <select name="position" value={formData.position} onChange={handleChange} className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          <option value="">Select Position</option>
          <option>Teacher</option>
          <option>Accountant</option>
          <option>Administrator</option>
          <option>Librarian</option>
          <option>Other</option>
        </select>
        <select name="gender" value={formData.gender} onChange={handleChange} className="input  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  );
};
