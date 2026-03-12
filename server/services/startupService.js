const createStartup = async(data) => {
    // Create a Startup entry in DB

    return {
        message: "Startup Created",
        data
    };
};

const getStartups = async(data) => {
    // Returns all the startup datas from the DB as an array

    return [];
};

module.exports = { createStartup, getStartups };