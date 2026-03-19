const startupService = require("../services/startupService");

// Creating a Startup data
const createStartup = async (req, res) => {
  try {
    const { startup } = await startupService.createStartup(
      req.body,
      req.user.id,
    );

    res.status(201).json({
      startup,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Getting startup details
const getStartup = async (req, res) => {
  try {
    const startup = await startupService.getStartupById(req.params.id);
    res.json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStartups = async (req, res) => {
  try {
    const startups = await startupService.getAllStartups(req.user.id);
    res.json(startups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save metrics and run AI analysis
const saveMetrics = async (req, res) => {
  try {
    const { startupId, ...metrics } = req.body;

    const startup = await startupService.getStartupById(startupId);
    if (!startup) return res.status(404).json({ message: "Startup not found" });

    // Save metrics inside startup
    startup.metrics = metrics;

    // Run AI analysis
    const aiAnalysis = await runAIAnalysis(startup); // should return structured object
    startup.aiAnalysis = aiAnalysis;

    await startup.save();

    res.json({ startup });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deleting a Startup Item
const deleteStartup = async (req, res) => {
  try {
    const deleted = await startupService.deleteStartup(
      req.params.id,
      req.user.id,
    );

    if (!deleted) {
      return res.status(404).json({ message: "Startup not found" });
    }

    res.json({ message: "Startup deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStartup,
  getStartup,
  getAllStartups,
  saveMetrics,
  deleteStartup,
};
