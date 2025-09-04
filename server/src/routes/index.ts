import express from 'express';
import { apiPaths } from '../resources/apis-paths';


/* import routes */
import { defaultRoute } from './default';
import { registerRoute } from './auth/register';
import { loginRoute } from './auth/login';



// declare the routes for router
export const routes = express.Router();



// register routes
routes.use(`${apiPaths.health}`,defaultRoute)
routes.use(`${apiPaths.register}`,registerRoute)
routes.use(`${apiPaths.login}`,loginRoute)