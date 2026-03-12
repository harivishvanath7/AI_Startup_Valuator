const express = require("express");
const router = express.Router();

const { createStartup, getStartups } = require("../controllers/startupController");

router.get("/", getStartups);
router.post("/", createStartup);

module.exports = router;