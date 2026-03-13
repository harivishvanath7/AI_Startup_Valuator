const Startup = require("../models/Startup");

const createStartup = async(data, userId) => {
    // Create a Startup entry in DB
    const startup = await Startup.create({
        name: data.name,
        industry: data.industry,
        stage: data.stage,
        foundedYear: Number(data.foundedYear),
        founderId: null, // userId - null (temporarily for dev)
    });
    return {
        message: "Startup Created",
        startup
    };
};

const getStartupById = async(id) => {
    // Returns the startup details
    return await Startup.findById(id);
};

module.exports = { createStartup, getStartupById };