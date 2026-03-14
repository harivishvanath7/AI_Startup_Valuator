const groq = require("../config/groqClient");
const parseJSON = require("../utils/jsonParser");
const { investorScorePrompt } = require("../utils/promptTemplates");

const evaluateInvestorReadiness = async (startup, metrics) => {
  const prompt = investorScorePrompt(startup, metrics);

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt
      },
    ],
    temperature: 0.3,
  });

  const rawOutput = response.choices[0].message.content;

  return parseJSON(rawOutput);
};

module.exports = { evaluateInvestorReadiness };
