import { Router, Request, Response } from "express";
import { verifyPasswordArgon2 } from "../../utils/argon2hash";


export const loginRoute = Router();

loginRoute.post("/", async (request: Request, response: Response): Promise<any> => {
    try {
        const reqBody = await request.body
        const {password,username} = reqBody 
        const hashed = "$argon2id$v=19$m=65536,t=3,p=4$N3sqgyXwjQUAvLKOUzEd1g$Nmt9VtIH0JUrBAd0gAvwmRLDbsju2gqVKSEDZ4JlHkU";
        const isPasswordTrue = await verifyPasswordArgon2(hashed,password)
        return response.status(200).json({ status: "success", "message": "success", result: isPasswordTrue })
    } catch (e) {
        console.log("error", e)
        return response.status(500).json({ status: "error", message: "Internal server error!" })
    }

});