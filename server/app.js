import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes";
import startupRoutes from "./routes/startupRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);

app.get("/", (req, res) => {
    res.send("Hello Founders!!..");
});

module.exports = app;
