const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const { createStartup, getStartup, getAllStartups, saveMetrics } = require("../controllers/startupController");

const router = express.Router();

// Protected Routes
router.get("/", authMiddleware, getAllStartups);
router.get("/:id", authMiddleware, getStartup);
router.post("/", authMiddleware, createStartup);

// New route to save metrics and run AI analysis
router.post("/:id/metrics", authMiddleware, saveMetrics);

module.exports = router;