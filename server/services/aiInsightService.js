const groq = require("../config/groqClient");
const parseJSON = require("../utils/jsonParser");

const generateInsights = async (startup, metrics, valuation, healthScore) => {
    const prompt = `
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

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.4
    });

    const rawOutput = response.choices[0].message.content;

    return parseJSON(rawOutput);
}

module.exports = { generateInsights };