import { EnumValues } from "zod";

export const JOBTYPES: EnumValues = [
  "Full Time",
  "Part Time",
  "Remote",
  "Contract",
  "Freelance",
  "Internship",
  "Temporary",
  "Traineeship",
];

export const JOB_LISTING_COLUMNS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTING_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "18 Agustus 2024",
    dueDate: "18 September 2024",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];
