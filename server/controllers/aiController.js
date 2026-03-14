const Startup = require("../models/Startup");
const Metrics = require("../models/Metrics");

const valuationService = require("../services/valuationService");
const healthScoreService = require("../services/healthScoreService");

const aiInsightService = require("../services/aiInsightService");
// Added Risk Analysis
const aiRiskAnalyser = require("../services/aiRiskAnalyser");
// Added Investor Readiness Score
const investorScoreService = require("../services/investorScoreService");

const analyzeStartup = async (req, res) => {
  try {
    const { startupId } = req.body;

    const startup = await Startup.findById(startupId);

    const metrics = await Metrics.findOne({ startupId });

    const valuationData = valuationService.calculateValuation(startup, metrics);

    const healthScore = healthScoreService.calculateHealthScore(metrics);

    const insights = await aiInsightService.generateInsights(
      startup,
      metrics,
      valuationData.valuation,
      healthScore,
    );

    // AI Risk Analysis
    const risks = await aiRiskAnalyser.analyseRisks(startup, metrics);

    // Investor Score
    const investorScore = await investorScoreService.evaluateInvestorReadiness(startup, metrics);

    res.json({
      valuation: valuationData,
      healthScore,
      aiInsights: insights,
      // risk analysis added
      riskAnalysis: risks,
      // investor readiness added
      investorReadiness: investorScore  
    });
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { analyzeStartup };
