// src/types/jobApplication.ts  (or anywhere you like)
export interface JobApplicationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  position: "" | "Teacher" | "Accountant" | "Administrator" | "Librarian" | "Other";
  gender: "" | "Male" | "Female" | "Other";
  qualification: string;
  university: string;
  yearOfPassing: string;
  cgpa: string;
  lastJob: string;
  yearsOfExperience: string;
  skills: string;
}

export interface UploadedFiles {
  [key: string]: File;
}