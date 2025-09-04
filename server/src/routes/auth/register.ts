import { Router, Request, Response } from "express";
import { bcryptHash } from "../../utils/hash";

export const registerRoute = Router();

registerRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const reqBody = await request.body
        const {password,...rest} = reqBody 
        const hasheduPassword = await bcryptHash(password)
        return response.status(201).json({ status: "success", "message": "success", result: hasheduPassword })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }

});