const industryMultiples = {
    SaaS: 8,
    Fintech: 10,
    AI: 12,
    Ecommerce: 5,
    Marketplace: 6,
    Healthtech: 9,
    Edtech: 7,
    Gaming: 6,
    Crypto: 8
};

// Helper function to access the above "multiples" object, default - 4
const getIndustryMultiple = (industry) => {
    return industryMultiples[industry] || 4;
};

module.exports = {
    industryMultiples,
    getIndustryMultiple
};



