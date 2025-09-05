import { Router, Request, Response } from "express";
import { bcryptHash } from "../../utils/hash";
import { RegisterSchema } from "../../form-schema";
import { UserRepo } from "../../repositories/user-repo";
import { uniqueString } from "../../utils/unique-string";



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
        const hasheduPassword = await bcryptHash(parsed.data.password)
        const userId =await uniqueString("usr")
        const data = {
            email:parsed.data.email,
            password:hasheduPassword,
            userId
        }
        const result = await UserRepo.create(data)
        const {password,...other} = result
        return response.status(201).json(other)
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }

});