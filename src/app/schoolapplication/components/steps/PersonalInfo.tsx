"use client";

import React from "react";

interface PersonalInfoData {
  schoolName?: string;
  registrationNumber?: string;
  establishedYear?: string;
  schoolType?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postcode?: string;
}

interface Props {
  formData: PersonalInfoData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function PersonalInfo({ formData, handleChange }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">School Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="schoolName"
          value={formData.schoolName || ""}
          onChange={handleChange}
          placeholder="School Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="registrationNumber"
          value={formData.registrationNumber || ""}
          onChange={handleChange}
          placeholder="Registration Number"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="establishedYear"
          value={formData.establishedYear || ""}
          onChange={handleChange}
          placeholder="Established Year"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <select
          name="schoolType"
          value={formData.schoolType || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Select School Type</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="charter">Charter</option>
        </select>

        <input
          name="addressLine1"
          value={formData.addressLine1 || ""}
          onChange={handleChange}
          placeholder="Address Line 1"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="addressLine2"
          value={formData.addressLine2 || ""}
          onChange={handleChange}
          placeholder="Address Line 2"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          placeholder="State/Province"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="postcode"
          value={formData.postcode || ""}
          onChange={handleChange}
          placeholder="Postal Code"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
}
