import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

// Modules Imports
import connectDB from "./dbconn.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/user.route.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));

app.use("/api/v1", userRouter);


app.use(errorMiddleware);
app.listen(PORT, () => {
    connectDB();
    console.log(`server running on port ${PORT}`);
});