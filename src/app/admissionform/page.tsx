"use client"
import React, { useState } from "react";
import { PersonalInfo } from "../Components/AdmisionForm/personalinfo";
import { ParentInfo } from "../Components/AdmisionForm/Parentinfo";
import { AcademicInfo } from "../Components/AdmisionForm/Acadamicinfo";
import { DocumentUpload } from "../Components/AdmisionForm/DocumentUpload";

export default function AdmissionForm (){
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    contact: "",
    father: "",
    mother: "",
    occupation: "",
    parentContact: "",
    previousSchool: "",
    lastGrade: "",
  });

  const [files, setFiles] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles({ ...files, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", files);
    alert("Admission form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-200"
    >
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        🏫 School Admission Form
      </h1>

      <PersonalInfo formData={formData} handleChange={handleChange} />
      <ParentInfo formData={formData} handleChange={handleChange} />
      <AcademicInfo formData={formData} handleChange={handleChange} />
      <DocumentUpload handleFileChange={handleFileChange} />

      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};
