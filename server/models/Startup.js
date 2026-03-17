const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
    },
    founderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    stage: {
      type: String,
      enum: ["idea", "mvp", "early", "growth", "scale"],
    },
    foundedYear: {
      type: Number,
    },
    // New field: store metrics
    metrics: {
      monthlyRevenue: Number,
      growthRate: Number,
      customerCount: Number,
      burnRate: Number,
      marketSize: Number,
      CAC: Number,
      LTV: Number,
    },
    // New field: store AI analysis
    aiAnalysis: {
      valuation: {
        valuation: Number,
        valuationRange: {
          low: Number,
          high: Number,
        },
        confidenceScore: Number,
        multiple: Number,
      },
      healthScore: Number,
      investorReadiness: {
        investorScore: Number,
        explanation: String,
      },
      riskAnalysis: {
        riskScore: Number,
        risks: [String],
      },
      aiInsights: {
        strengths: [String],
        weaknesses: [String],
        growthSuggestions: [String],
        investmentAttractiveness: String,
      },
    },
  },
  { timestamps: true },
);

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;
