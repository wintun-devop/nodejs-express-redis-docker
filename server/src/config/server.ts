import express, { Application } from 'express';
import { routes } from '../routes';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();
// declare instance
const app:Application = express();

const apiBasePath = process.env.API_BASE_PATH as string;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middlewares
app.use(express.json());

// routes
app.use(`${apiBasePath}`, routes);

export default app;