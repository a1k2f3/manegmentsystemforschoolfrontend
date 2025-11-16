"use client";

import React from "react";

interface Props {
  formData: any;
}

export default function ReviewSubmit({ formData }: Props) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Review & Submit</h3>
      <div className="space-y-2 text-sm text-gray-700">
        <div><strong>School:</strong> {formData.schoolName} ({formData.registrationNumber})</div>
        <div><strong>Established:</strong> {formData.establishedYear}</div>
        <div><strong>Type:</strong> {formData.schoolType}</div>
        <div><strong>Address:</strong> {formData.addressLine1} {formData.addressLine2}, {formData.city}, {formData.state} - {formData.postcode}</div>
        <div><strong>Principal:</strong> {formData.principalName} — {formData.principalEmail}</div>
        <div><strong>Contact:</strong> {formData.contactPhone} — {formData.website}</div>
        <div><strong>Affiliation:</strong> {formData.affiliationBoard} ({formData.accreditationNumber})</div>
        <div><strong>Capacity:</strong> {formData.totalStudents} students, {formData.totalTeachers} teachers</div>
      </div>

      <p className="text-sm text-gray-500 mt-4">Please confirm that the information is correct before submitting.</p>
    </div>
  );
}
