const express = require("express");

// const authMiddleware = require("../middleware/authMiddleware");
const { createStartup, getStartup, getAllStartups } = require("../controllers/startupController");

const router = express.Router();

// Protected Routes
router.get("/", getAllStartups);
router.get("/:id", getStartup);
router.post("/", createStartup);

module.exports = router;