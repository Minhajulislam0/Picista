import { z } from "zod";

export const signupValidation = z.object({
  name: z.string().min(6, { message: "Name must be at least 6 character" }),
  username: z
    .string()
    .min(2, { message: "Usarname must be at least 2 character" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character" }),
});
