const groq = require("../config/groqClient");
const parseJSON = require("../utils/jsonParser");

const analyseRisks = async (startup, metrics) => {

    const prompt = `
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

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            { 
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.3
    });

    const rawOutput = response.choices[0].message.content;

    return parseJSON(rawOutput);
};

module.exports = { analyseRisks };
