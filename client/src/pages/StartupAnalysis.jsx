import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AIInsightsCard from "../components/AIInsightsCard";
import HealthScoreCard from "../components/HealthScoreCard";
import InvestorScoreCard from "../components/InvestorScoreCard";
import RiskCard from "../components/RiskCard";
import ValuationCard from "../components/ValuationCard";

import aiAnalysisApi from "../api/aiAnalysisApi";

const StartupAnalysis = () => {
  const { startupId } = useParams();
  const navigate = useNavigate();

  console.log("ANALYSIS PAGE ID:", startupId);

  const [loading, setLoading] = useState(true);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {

    if(!startupId){
      console.log("No startupId found!", startupId);
      setLoading(false);
      return;
    }

    const fetchAnalysis = async () => {
      try {
      
        const data = await aiAnalysisApi.runAnalysis(startupId);
        console.log("AI Analysis:", data);

        setAnalysis(data);
        
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    fetchAnalysis();
  }, [startupId]);

  //  Loading Screen
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Analyzing your startup...</h1>

        <div className="animate-pulse text-gray-500">
          AI is generating insights 🚀
        </div>
      </div>
    );
  }

  // ❌ If failed
  if (!analysis) {
    return <p>Failed to load analysis</p>;
  }

  // ✅ Show Results
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-heading">Startup Analysis</h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ValuationCard data={analysis.valuation} />
        <HealthScoreCard data={analysis.healthScore} />
        <InvestorScoreCard data={analysis.investorReadiness} />
        <RiskCard data={analysis.riskAnalysis} />
      </div>

      <AIInsightsCard insights={analysis.aiInsights} />
    </div>
  );
};

export default StartupAnalysis;
