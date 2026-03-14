const { getIndustryMultiple } = require("../utils/industryMultiples");

const calculateValuation = (startup, metrics) => {

    // Extract Values
    const revenue = metrics.monthlyRevenue || 0;
    const industry = startup.industry;

    // Industry Multiple
    const multiple = getIndustryMultiple(industry);

    // Calculating Valuation
    const valuation = revenue * multiple;

    // Valuation Range (+/- 20%)
    const valuationRange = {
        low: valuation * 0.8,
        high: valuation * 1.2
    };

    // Confidence Score
    let confidenceScore = 0.5;

    if (metrics.customerCount > 100) confidenceScore += 0.1;
    if (metrics.growthRate > 10) confidenceScore += 0.1;
    if (metrics.marketSize > 1000000) confidenceScore += 0.1;
    if (metrics.LTV > metrics.CAC) confidenceScore += 0.1;
  
    if (confidenceScore > 0.9) confidenceScore = 0.9;

    return {
        valuation,
        valuationRange,
        confidenceScore,
        multiple
    };
};

module.exports = {
    calculateValuation
};