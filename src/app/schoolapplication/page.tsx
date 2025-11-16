"use client";

import React, { useState } from "react";
import FormContainer from "./components/FormContainer";
import StepNav from "./components/StepNav";
import PersonalInfo from "./components/steps/PersonalInfo"; // School info
import ParentInfo from "./components/steps/ParentInfo"; // Contact & leadership
import AcademicInfo from "./components/steps/AcademicInfo"; // Accreditation
import DocumentsUpload from "./components/steps/DocumentsUpload";
import ReviewSubmit from "./components/steps/ReviewSubmit";

export default function SchoolApplicationPage() {
	const [step, setStep] = useState<number>(1);
		const totalSteps = 5;

	const [formData, setFormData] = useState<any>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((s: any) => ({ ...s, [name]: value }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = e.target;
		const file = e.target.files && e.target.files[0];
		setFormData((s: any) => ({ ...s, [name]: file }));
	};

	const next = () => setStep((s) => Math.min(totalSteps, s + 1));
	const prev = () => setStep((s) => Math.max(1, s - 1));

		const validateStep = (current: number) => {
			// minimal validation per step (school registration fields)
			if (current === 1) {
				return !!formData.schoolName && !!formData.registrationNumber;
			}
			if (current === 2) {
				return !!formData.principalName && !!formData.contactPhone;
			}
			if (current === 3) {
				return !!formData.affiliationBoard;
			}
			return true;
		};

	const handleSubmit = async () => {
		// simple submit demo: log the formData. Replace with API call.
		console.log("Submitting application:", formData);
		alert("Application submitted (demo). Check console for data.");
	};

	return (
		<FormContainer title="School Registration" subtitle="Register a school in the system — provide accurate details and upload required documents">
			<div>
				{step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} />}
				{step === 2 && <ParentInfo formData={formData} handleChange={handleChange} />}
				{step === 3 && <AcademicInfo formData={formData} handleChange={handleChange} />}
				{step === 4 && <DocumentsUpload formData={formData} handleFileChange={handleFileChange} />}
				{step === 5 && <ReviewSubmit formData={formData} />}

				<StepNav
					step={step}
					total={totalSteps}
					onPrev={prev}
					onNext={() => {
						if (step === totalSteps) {
							handleSubmit();
						} else if (validateStep(step)) next();
						else alert("Please complete required fields for this step.");
					}}
					isNextDisabled={!validateStep(step)}
				/>
			</div>
		</FormContainer>
	);
}
