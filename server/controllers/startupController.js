const startupService = require("../services/startupService");

// Creating a Startup data
const createStartup = async (req, res) => {
  try {
    const startup = await startupService.createStartup(req.body);
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Getting all startup details
const getStartups = async (req, res) => {
  try {
    const startups = startupService.getStartups(req.body);
    res.json(startups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStartup, getStartups };
