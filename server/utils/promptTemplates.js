// AI Insights prompt

const startupInsightPrompt = (startup, metrics, valuation, healthScore) => {
  return `
        You are a venture capital analyst.
        Analyze the following startup.

        Startup Info:
        Industry: ${startup.industry}
        Stage: ${startup.stage}

        Metrics:
        Monthly Revenue: ${metrics.monthlyRevenue}
        Growth Rate: ${metrics.growthRate}
        Customer Count: ${metrics.customerCount}
        Burn Rate: ${metrics.burnRate}
        Market Size: ${metrics.marketSize}
        CAC: ${metrics.CAC}
        LTV: ${metrics.LTV}

        Calculated Metrics:
        Valuation: ${valuation}
        Health Score: ${healthScore}

        Return ONLY JSON in this format:

        {
        "strengths": [],
        "weaknesses": [],
        "growthSuggestions": [],
        "investmentAttractiveness": ""
        }`;
};

// Risk Analysis Prompt

const riskAnalysisPrompt = (startup, metrics, valuation, healthScore) => {
  return `
        You are a venture capital risk analyst.
        Analyze risks for the following startup.

        Industry: ${startup.industry}
        Stage: ${startup.stage}

        Metrics:
        Monthly Revenue: ${metrics.monthlyRevenue}
        Growth Rate: ${metrics.growthRate}
        Customer Count: ${metrics.customerCount}
        Burn Rate: ${metrics.burnRate}
        Market Size: ${metrics.marketSize}
        CAC: ${metrics.CAC}
        LTV: ${metrics.LTV}

        Detect risks such as:
        - high burn rate
        - low growth
        - weak market
        - high CAC
        - bad unit economics

        Return ONLY JSON in this format:

        {
        "riskScore": number,
        "risks": []
        }
    `;
};

const investorScorePrompt = (startup, metrics) => {
  return `
        You are a venture capitalist evaluating startup funding readiness.

        Evaluate the startup based on:

        - traction
        - market opportunity
        - financial health
        - growth potential

        Startup Info
        Industry: ${startup.industry}
        Stage: ${startup.stage}

        Metrics
        Monthly Revenue: ${metrics.monthlyRevenue}
        Growth Rate: ${metrics.growthRate}
        Customer Count: ${metrics.customerCount}
        Burn Rate: ${metrics.burnRate}
        Market Size: ${metrics.marketSize}
        CAC: ${metrics.CAC}
        LTV: ${metrics.LTV}

        Return ONLY JSON:

        {
        "investorScore": number,
        "explanation": ""
        }
    `;
};

module.exports = {
  startupInsightPrompt,
  riskAnalysisPrompt,
  investorScorePrompt,
};
