const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const startupRoutes = require("./routes/startupRoutes");
const metricsRoutes = require("./routes/metricRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("Hello Founders!!..");
});

module.exports = app;
