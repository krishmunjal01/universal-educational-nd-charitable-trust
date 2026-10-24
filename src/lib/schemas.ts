import { z } from "zod";

/**
 * Client-safe zod schemas for the public forms. The same schemas run on the
 * server inside the submission server functions — validation is never
 * client-only.
 */

export const volunteerSchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name.").max(120, "Name is too long."),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(20, "Phone number is too long.").optional().or(z.literal("")),
  interest: z.enum(["education", "livelihoods", "health", "environment", "general"], {
    errorMap: () => ({ message: "Please choose an area of interest." }),
  }),
  skills: z
    .string()
    .trim()
    .max(500, "Please keep this under 500 characters.")
    .optional()
    .or(z.literal("")),
  availability: z.enum(["weekdays", "weekends", "evenings", "flexible"], {
    errorMap: () => ({ message: "Please choose your availability." }),
  }),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please confirm you are happy for us to contact you.",
  }),
});
export type VolunteerInput = z.infer<typeof volunteerSchema>;

export const partnershipSchema = z.object({
  organisation_name: z.string().trim().min(2, "Please enter your organisation's name.").max(160),
  contact_name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address.").max(200),
  partnership_type: z.enum(["corporate", "foundation", "ngo", "individual", "other"], {
    errorMap: () => ({ message: "Please choose a partnership type." }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(2000, "Please keep this under 2,000 characters."),
});
export type PartnershipInput = z.infer<typeof partnershipSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(20, "Phone number is too long.").optional().or(z.literal("")),
  subject: z.string().trim().max(150, "Subject is too long.").optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please keep this under 2,000 characters."),
});
export type ContactInput = z.infer<typeof contactSchema>;

/** Flattens a zod error into a { field: message } map for form display. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const result: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !result[key]) result[key] = issue.message;
  }
  return result;
}
