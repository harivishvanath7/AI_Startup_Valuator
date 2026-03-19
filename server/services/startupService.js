const Startup = require("../models/Startup");

const createStartup = async(data, userId) => {
    // Create a Startup entry in DB
    const startup = await Startup.create({
        name: data.name,
        industry: data.industry,
        stage: data.stage,
        foundedYear: Number(data.foundedYear),
        founderId: userId, 
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

const getAllStartups = async (userId) => {
    return await Startup.find({ founderId: userId }).sort({ createdAt: -1 });
}

const deleteStartup = async (id, userId) => {
    return await Startup.findOneAndDelete({
        _id: id,
        founderId: userId
    });
};

module.exports = { createStartup, getStartupById, getAllStartups, deleteStartup };