// @/types/SchoolApplication.ts
export interface SchoolApplicationFormData {
  // Step 1
  schoolName: string;
  registrationNumber: string;
  establishmentYear: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  schoolType: "Private" | "Government" | "Aided" | "International" | "";
  medium: "English" | "Hindi" | "Regional" | "Other" | "";

  // Step 2
  principalName: string;
  principalPhone: string;
  principalEmail: string;
  contactPersonName?: string;
  contactPhone: string;
  contactEmail: string;

  // Step 3
  affiliationBoard: "CBSE" | "ICSE" | "State Board" | "IB" | "Other" | "";
  otherBoardName?: string;
  gradesOffered: string;
  totalStudents: string;
  totalTeachers: string;

  // Step 4 - THESE WERE MISSING!
  registrationCertificate?: File | null;
  affiliationCertificate?: File | null;
  noc?: File | null;
  schoolLogo?: File | null;
}