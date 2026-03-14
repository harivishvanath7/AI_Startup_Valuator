const groq = require("../config/groqClient");
const parseJSON = require("../utils/jsonParser");
const { startupInsightPrompt } = require("../utils/promptTemplates");

const generateInsights = async (startup, metrics, valuation, healthScore) => {
    
    // Get the prompt
    const prompt = startupInsightPrompt(startup, metrics, valuation, healthScore);

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