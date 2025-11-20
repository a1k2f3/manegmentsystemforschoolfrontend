// src/components/steps/ReviewSubmit.tsx
"use client";

import React from "react";
import { SchoolApplicationFormData } from "@/types/schoolApplication";

interface Props {
  formData: SchoolApplicationFormData;
}
export default function ReviewSubmit({ formData }: Props) {
  const formatFile = (file: File | null | undefined) => {
    return file ? file.name : "Not uploaded";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Review Your Application
      </h2>

      <div className="space-y-8">

        {/* Step 1: School Information */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">School Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>School Name:</strong> {formData.schoolName || "—"}</div>
            <div><strong>Registration No:</strong> {formData.registrationNumber || "—"}</div>
            <div><strong>Established:</strong> {formData.establishmentYear || "—"}</div>
            <div><strong>Type:</strong> {formData.schoolType || "—"}</div>
            <div><strong>Medium:</strong> {formData.medium || "—"}</div>
            <div className="md:col-span-2"><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.pincode}</div>
          </div>
        </div>

        {/* Step 2: Leadership & Contact */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Leadership & Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Principal:</strong> {formData.principalName || "—"}</div>
            <div><strong>Principal Phone:</strong> {formData.principalPhone || "—"}</div>
            <div><strong>Principal Email:</strong> {formData.principalEmail || "—"}</div>
            <div><strong>Contact Person Phone:</strong> {formData.contactPhone || "—"}</div>
            <div><strong>Contact Email:</strong> {formData.contactEmail || "—"}</div>
          </div>
        </div>

        {/* Step 3: Academic Info */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Affiliation Board:</strong> {formData.affiliationBoard || "—"}</div>
            <div><strong>Grades Offered:</strong> {formData.gradesOffered || "—"}</div>
            <div><strong>Total Students:</strong> {formData.totalStudents || "—"}</div>
            <div><strong>Total Teachers:</strong> {formData.totalTeachers || "—"}</div>
          </div>
        </div>

        {/* Step 4: Documents */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Documents</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Registration Certificate:</span>
              <span className={formData.registrationCertificate ? "text-green-600" : "2text-red-500"}>
                {formatFile(formData.registrationCertificate)}
              </span>
            </li>
            <li className="flex justify-between">
              <span>Affiliation Certificate:</span>
              <span>{formatFile(formData.affiliationCertificate)}</span>
            </li>
            <li className="flex justify-between">
              <span>NOC:</span>
              <span>{formatFile(formData.noc)}</span>
            </li>
            <li className="flex justify-between">
              <span>School Logo:</span>
              <span>{formatFile(formData.schoolLogo)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 p-6 bg-blue-50 rounded-lg text-center">
        <p className="text-lg font-medium text-blue-900">
          Please verify all information above is correct before submitting.
        </p>
      </div>
    </div>
  );
}