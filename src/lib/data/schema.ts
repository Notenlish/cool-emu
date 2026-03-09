import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  title: z.string().max(100),
  content: z.string().max(10000)
});

export type FormSchema = typeof formSchema;