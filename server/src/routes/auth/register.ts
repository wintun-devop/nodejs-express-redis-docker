import { Router, Request, Response } from "express";
import { bcryptHash } from "../../utils/hash";
import { RegisterSchema } from "../../form-schema";


export const registerRoute = Router();

registerRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const parsed = RegisterSchema.safeParse(request.body)
        if (!parsed.success) {
            return response.status(400).json({
                status: "error",
                message: "Invalid request body",
                // Zod's structured error output
                errors: parsed.error.format(), 
            });
        }
        const { password, ...rest } = parsed.data;
        const hasheduPassword = await bcryptHash(password)
        return response.status(201).json({ status: "success", "message": "success", result: hasheduPassword })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }

});