const groq = require("../config/groqClient");
const parseJSON = require("../utils/jsonParser");
const { riskAnalysisPrompt } = require("../utils/promptTemplates");

const analyseRisks = async (startup, metrics) => {

    // Get the prompt
    const prompt = riskAnalysisPrompt(startup, metrics);

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
