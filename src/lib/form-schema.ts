import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFromSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required!" })
    .min(3, { message: "Job Title must be at least 3 characters long!" })
    .max(50, { message: "Job Title must not exceed 50 characters!" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type!",
  }),
  salaryFrom: z
    .string({ required_error: "Salary From is required!" })
    .min(1, { message: "Salary must be at least 1 character long!" })
    .max(50, { message: "Salary must not exceed 50 characters!" }),
  salaryTo: z
    .string({ required_error: "Salary To is required!" })
    .min(1, { message: "Salary must be at least 1 character long!" })
    .max(50, { message: "Salary must not exceed 50 characters!" }),
  categoryId: z.string({ required_error: "You need to select a category!" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be at least 1 skill" }),
  jobDescription: z
    .string({ required_error: "Job Description is required!" })
    .min(10, {
      message: "Job Description must be at least 10 characters long!",
    })
    .max(1000, { message: "Job Description must not exceed 2000 characters!" }),
  responsibility: z
    .string({ required_error: "Responsibilities is required!" })
    .min(10, {
      message: "Responsibilities must be at least 10 characters long!",
    })
    .max(1000, {
      message: "Responsibilities must not exceed 2000 characters!",
    }),
  whoYouAre: z
    .string({ required_error: "Who You Are is required!" })
    .min(10, { message: "Who You Are must be at least 10 characters long!" })
    .max(1000, { message: "Who You Are must not exceed 2000 characters!" }),
  niceToHaves: z
    .string({ required_error: "Nice-To-Haves is required!" })
    .min(10, { message: "Nice-To-Haves must be at least 10 characters long!" })
    .max(1000, { message: "Nice-To-Haves must not exceed 2000 characters!" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }),
});

export const overvierFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Please upload an image" }),
  name: z
    .string({ required_error: "Name is required!" })
    .min(3, { message: "Name must be at least 3 characters long!" })
    .max(50, { message: "Name must not exceed 50 characters!" }),
  website: z
    .string({ required_error: "Website is required!" })
    .min(3, { message: "Website must be at least 3 characters long!" })
    .max(50, { message: "Website must not exceed 50 characters!" }),
  location: z
    .string({ required_error: "Location is required!" })
    .min(3, { message: "Location must be at least 3 characters long!" })
    .max(50, { message: "Location must not exceed 50 characters!" }),
  employee: z
    .string({ required_error: "Employee is required!" })
    .min(3, { message: "Employee must be at least 3 characters long!" })
    .max(50, { message: "Employee must not exceed 50 characters!" }),
  industry: z
    .string({ required_error: "Industry is required!" })
    .min(3, { message: "Industry must be at least 3 characters long!" })
    .max(50, { message: "Industry must not exceed 50 characters!" }),
  dateFounded: z
    .string({ required_error: "Date founded is required!" })
    .min(3, { message: "Date founded must be at least 3 characters long!" })
    .max(50, { message: "Date founded must not exceed 50 characters!" }),
  techStack: z
    .string()
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 tech stack" }),
  description: z
    .string({ required_error: "Description is required!" })
    .min(10, { message: "Description must be at least 10 characters long!" })
    .max(1000, { message: "Description must not exceed 1000 characters!" }),
});
