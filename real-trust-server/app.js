import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/app.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
// import { v2 as cloudinary } from "cloudinary";
config();
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });
const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true,
    })
);
app.use(cookieParser());
// Routes
app.use('/api/v1', appRouter);

export default app;
