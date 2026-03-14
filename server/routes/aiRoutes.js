const express = require("express");
const { analyzeStartup } = require("../controllers/aiController");
const router = express.Router();


router.post("/analyzeStartup", analyzeStartup);

module.exports = router;