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

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Please upload an image" }),
  name: z
    .string({ required_error: "Company Name is required!" })
    .min(3, { message: "Company Name must be at least 3 characters long!" })
    .max(50, { message: "Company Name must not exceed 50 characters!" }),
  website: z
    .string({ required_error: "Website is required!" })
    .min(3, { message: "Website must be at least 3 characters long!" })
    .max(50, { message: "Website must not exceed 50 characters!" }),
  location: z.string({ required_error: "Location is required!" }),
  employee: z.string({ required_error: "Employee is required!" }),
  industry: z.string({ required_error: "Industry is required!" }),
  dateFounded: z.date({ required_error: "Date founded is required!" }),
  techStack: z
    .string({ required_error: "Tech Stack is required!" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 tech stack" }),
  description: z
    .string({ required_error: "Description is required!" })
    .min(10, { message: "Description must be at least 10 characters long!" })
    .max(1000, { message: "Description must not exceed 1000 characters!" }),
});

export const socialMediaFormSchema = z.object({
  linkedin: z
    .string({ required_error: "Linkedin is required!" })
    .min(3, { message: "LinkedIn url must be at least 3 characters long!" })
    .max(50, { message: "LinkedIn url must not exceed 50 characters!" }),
  website: z
    .string({ required_error: "Webs ite is required!" })
    .min(3, { message: "Website url must be at least 3 characters long!" })
    .max(50, { message: "Webiste url must not exceed 50 characters!" }),
  instagram: z
    .string({ required_error: "Instagram is required!" })
    .min(3, { message: "Instagram url must be at least 3 characters long!" })
    .max(50, { message: "Instagram url must not exceed 50 characters!" }),
  facebook: z.string().optional(),
  x: z.string().optional(),
});

export const teamFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Member name must be at least 3 characters long!" })
    .max(50, { message: "Member name must not exceed 50 characters!" }),
  position: z
    .string({ required_error: "Position is required" })
    .min(3, { message: "Position must be at least 3 characters long!" })
    .max(50, { message: "Position must not exceed 50 characters!" }),
  linkedin: z
    .string({ required_error: "Linkedin is required" })
    .min(3, { message: "LinkedIn url must be at least 3 characters long!" })
    .max(50, { message: "LinkedIn url must not exceed 50 characters!" }),
  instagram: z.string({ required_error: "Instagram is required" }).optional(),
});

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long!" }),
});

export const signUpFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long!" })
    .max(50, { message: "Member name must not exceed 50 characters!" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long!" }),
});
