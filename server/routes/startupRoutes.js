const express = require("express");

// const authMiddleware = require("../middleware/authMiddleware");
const { createStartup, getStartup } = require("../controllers/startupController");

const router = express.Router();

// Protected Routes
router.get("/:id", getStartup);
router.post("/", createStartup);

module.exports = router;