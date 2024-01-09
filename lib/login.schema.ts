import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required.' }),
  password: z
    .string()
    .min(10, { message: 'Password is invalid.' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;