const express = require("express");

const { createMetrics, getMetrics } = require("../controllers/metricsController");

// const authMiddleware = require("../middleware/authMiddleware"); // optional for now

const router = express.Router();

router.post("/", createMetrics);
router.get("/:startupId", getMetrics);

module.exports = router;