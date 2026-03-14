const metricsService = require("../services/metricsService");

// Create metrics
const createMetrics = async (req, res) => {
    try {
        console.log('Metrics Req Body:', req.body);
        const result = await metricsService.createMetrics(req.body);
        res.status(201).json(result);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Get metrics
const getMetrics = async (req, res) => {
    try {
        const metrics = await metricsService.getMetricsByStartup(req.params.startupId);
        res.json(metrics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createMetrics, getMetrics };