import { Router, Request, Response } from "express";
import { bcryptCheck } from "../../utils/hash";

export const loginRoute = Router();

loginRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const reqBody = await request.body
        const {password,username} = reqBody 
        const hashed = "$2b$10$RIkV0NjT2YxtWRSxqTeA/.3bD7RY81hLkOwpNiGkqUP7j4MG03why";
        const isPasswordTrue = await bcryptCheck(password,hashed)
        return response.status(200).json({ status: "success", "message": "success", result: isPasswordTrue })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }

});