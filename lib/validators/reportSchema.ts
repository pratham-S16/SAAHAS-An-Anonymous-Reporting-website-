import { z } from "zod";

export const reportSchema = z.object({
  category: z.string().min(3).max(50),

  description: z.string()
    .min(20, "Description too short")
    .max(5000, "Description too long"),

  state: z.string().min(2).max(100),
  district: z.string().min(2).max(100),
  policeStation: z.string().min(2).max(150),

  email: z.string().email().optional().or(z.literal("")),

  incidentDate: z.string().optional(),
  incidentTime: z.string().optional(),

  pressure: z.string().max(2000).optional(),

  files: z.array(z.string()).optional(), // URLs after upload
});
