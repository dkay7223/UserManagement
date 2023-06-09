import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();
import userRouter from "./routes/userRoutes.js";
import dbConnection from "./database/dbConnection.js";
const app = express();
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.listen(process.env.PORT, () => {
    dbConnection();
    console.log("Server is running on port 5000");
})

