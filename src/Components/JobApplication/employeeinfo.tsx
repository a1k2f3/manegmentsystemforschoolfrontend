"use client";
import React, { useState } from "react";
import { PersonalDetails } from "./Personaldetail";
import { EducationInfo } from "./Educationinfo";
import { ExperienceInfo } from "./Experienceinfo";
import { DocumentUpload } from "./Documentts";


export const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    gender: "",
    qualification: "",
    university: "",
    yearOfPassing: "",
    cgpa: "",
    lastJob: "",
    yearsOfExperience: "",
    skills: "",
  });

  const [files, setFiles] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles({ ...files, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Data:", formData);
    console.log("Uploaded Files:", files);
    alert("Job Application Submitted Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-200"
    >
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        🧾 Job Application Form
      </h1>

      <PersonalDetails formData={formData} handleChange={handleChange} />
      <EducationInfo formData={formData} handleChange={handleChange} />
      <ExperienceInfo formData={formData} handleChange={handleChange} />
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
