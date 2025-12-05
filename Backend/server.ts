import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
import connectDB from "./config/db"



connectDB();

const app: Application = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
// app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server running" });
});


// Importing Routes

import courseRoutes from "./routes/courseRoutes"
import paymentRoute from "./routes/paymentRoute";
import studentRoutes from "./routes/studentRoutes";
import assignmentRoutes from "./routes/assignmentRoutes"; 
import userRoute from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import batchEnrollRoutes from "./routes/batchEnroll";


// Routes

app.use("/api/courses", courseRoutes);
app.use("/api/student", paymentRoute);
app.use("/api/student", studentRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", batchEnrollRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
