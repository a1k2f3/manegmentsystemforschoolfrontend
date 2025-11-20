"use client";

import React, { useState } from "react";
import FormContainer from "./components/FormContainer";
import StepNav from "./components/StepNav";
import PersonalInfo from "./components/steps/PersonalInfo";
import ParentInfo from "./components/steps/ParentInfo";
import AcademicInfo from "./components/steps/AcademicInfo";
import DocumentsUpload from "./components/steps/DocumentsUpload";
import ReviewSubmit from "./components/steps/ReviewSubmit";
import { SchoolApplicationFormData } from "@/types/schoolApplication";

export default function SchoolApplicationPage() {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 5;

 const [formData, setFormData] = useState<SchoolApplicationFormData>({
  schoolName: "",
  registrationNumber: "",
  establishmentYear: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  schoolType: "",
  medium: "",

  principalName: "",
  principalPhone: "",
  principalEmail: "",
  contactPhone: "",
  contactEmail: "",

  affiliationBoard: "",
  gradesOffered: "",
  totalStudents: "",
  totalTeachers: "",

  // Add these!
  registrationCertificate: null,
  affiliationCertificate: null,
  noc: null,
  schoolLogo: null,
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || !name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  const next = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const validateStep = (current: number): boolean => {
    switch (current) {
      case 1:
        return !!formData.schoolName && !!formData.registrationNumber;
      case 2:
        return !!formData.principalName && !!formData.contactPhone;
      case 3:
        return !!formData.affiliationBoard;
      case 4:
        return !!formData.registrationCertificate;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    console.log("Final Submission:", formData);

    // Optional: Convert files to FormData for API
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        submitData.append(key, value);
      } else if (value !== undefined && value !== null) {
        submitData.append(key, String(value));
      }
    });

    // Replace with real API call
    // await fetch("/api/school/register", { method: "POST", body: submitData });

    alert("School registration submitted successfully!");
  };

  const handleNext = () => {
    if (step === totalSteps) {
      handleSubmit();
    } else if (validateStep(step)) {
      next();
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  return (
    <FormContainer
      title="School Registration"
      subtitle="Register your school with accurate details and required documents"
    >
      <div>
        {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} />}
        {step === 2 && <ParentInfo formData={formData} handleChange={handleChange} />}
        {step === 3 && <AcademicInfo formData={formData} handleChange={handleChange} />}
        {step === 4 && <DocumentsUpload handleFileChange={handleFileChange} />}
        {step === 5 && <ReviewSubmit formData={formData} />}

        <StepNav
  step={step}
  total={totalSteps}
  onPrev={prev}
  onNext={handleNext}
  isNextDisabled={step < totalSteps && !validateStep(step)}
  isSubmit={step === totalSteps}
/>
      </div>
    </FormContainer>
  );
}