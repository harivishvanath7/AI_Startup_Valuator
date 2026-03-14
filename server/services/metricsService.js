const Metrics = require("../models/Metrics");

// Create metrics for a startup
const createMetrics = async (data) => {
    const metrics = await Metrics.create({
        startupId: data.startupId,
        monthlyRevenue: Number(data.monthlyRevenue),
        growthRate: Number(data.growthRate),
        customerCount: Number(data.customerCount),
        burnRate: Number(data.burnRate),
        marketSize: Number(data.marketSize),
        CAC: Number(data.CAC),
        LTV: Number(data.LTV)
    });
    return { message: "Metrics Created", metrics };
};

// Get metrics by startup
const getMetricsByStartup = async (startupId) => {
    return await Metrics.findOne({ startupId });
};

module.exports = { createMetrics, getMetricsByStartup };