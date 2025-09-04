import { z } from "zod";

export const RegisterSchema = z.object({
    // username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8).max(32).refine(val => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
    }).refine(val => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter",
    }).refine(val => /\d/.test(val), {
        message: "Password must contain at least one number",
    }).refine(val => /[@$!%*?&]/.test(val), {
        message: "Password must contain at least one special character",
    }),
});