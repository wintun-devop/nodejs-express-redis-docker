import { Router, Request, Response } from 'express';


//declare router
export const defaultRoute = Router();

// crate request and response
defaultRoute.get('/', async (request: Request, response: Response) => {
    response.send({ "message": "API is working ok" })
})