const startupService = require("../services/startupService");

// Creating a Startup data
const createStartup = async (req, res) => {
  try {
    const startup = await startupService.createStartup(req.body, null); // req.user.id -> null (testing)
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Getting startup details
const getStartup = async (req, res) => {
  try {
    const startup = startupService.getStartupById(req.params.id);
    res.json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStartup, getStartup };
