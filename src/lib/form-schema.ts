import { JOBTYPES } from "@/constant";
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
    .string({ required_error: "Salary is required!" })
    .min(1, { message: "Salary must be at least 1 character long!" })
    .max(50, { message: "Salary must not exceed 50 characters!" }),
  salaryTo: z
    .string({ required_error: "Salary is required!" })
    .min(1, { message: "Salary must be at least 1 character long!" })
    .max(50, { message: "Salary must not exceed 50 characters!" }),
  categoryId: z.string({ required_error: "You need to select a category!" }),
  requiredSkill: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must include at least 1 skill!" }),
  jobDescription: z
    .string({ required_error: "Job Description is required!" })
    .min(10, {
      message: "Job Description must be at least 10 characters long!",
    })
    .max(2000, { message: "Job Description must not exceed 2000 characters!" }),
  responsibility: z
    .string({ required_error: "Responsibility is required!" })
    .min(10, { message: "Responsibility must be at least 10 characters long!" })
    .max(2000, { message: "Responsibility must not exceed 2000 characters!" }),
  whoYouAre: z
    .string({ required_error: "Responsibility is required!" })
    .min(10, { message: "Responsibility must be at least 10 characters long!" })
    .max(2000, { message: "Responsibility must not exceed 2000 characters!" }),
  niceToHaves: z
    .string({ required_error: "Responsibility is required!" })
    .min(10, { message: "Responsibility must be at least 10 characters long!" })
    .max(2000, { message: "Responsibility must not exceed 2000 characters!" }),
  benefits: z
    .object({
      benefit: z
        .string({ required_error: "Benefits is required!" })
        .array()
        .nonempty({ message: "Benefits must include at least 1 benefit!" }),
      description: z
        .string({ required_error: "Description is required!" })
        .min(10, {
          message: "Description must be at least 10 characters long!",
        })
        .max(2000, { message: "Description must not exceed 2000 characters!" }),
    })
    .array()
    .nonempty({ message: "Benefits must include at least 1 benefit!" }),
});
