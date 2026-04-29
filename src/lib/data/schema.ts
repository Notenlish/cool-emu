import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  title: z.string().max(120),
  content: z.string().max(10000)
});
export const feedbackSchema = z.object({
  username: z.string().min(3).max(50),
  title: z.string().max(120),
  content: z.string().max(10000)
})

export type FormSchema = typeof formSchema;
export type FeedbackFormSchema = typeof feedbackSchema;