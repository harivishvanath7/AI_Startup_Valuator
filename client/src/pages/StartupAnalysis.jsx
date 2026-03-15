import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AIInsightsCard from "../components/AIInsightsCard";
import HealthScoreCard from "../components/HealthScoreCard";
import InvestorScoreCard from "../components/InvestorScoreCard";
import RiskCard from "../components/RiskCard";
import ValuationCard from "../components/ValuationCard";

const StartupAnalysis = () => {
  const { startupId } = useParams();

  const [analysis, setAnalysis] = useState(null);

  const fetchAnalysis = async () => {
    const res = await fetch("/api/ai/analyzeStartup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startupId }),
    });

    const data = await res.json();

    setAnalysis(data);
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  if (!analysis) return <div>Loading Analysis...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Startup AI Analysis</h1>

      <ValuationCard valuation={analysis.valuation} />

      <HealthScoreCard score={analysis.healthScore} />

      <InvestorScoreCard data={analysis.investorReadiness} />

      <RiskCard data={analysis.riskAnalysis} />

      <AIInsightsCard insights={analysis.aiInsights} />
    </div>
  );
};

export default StartupAnalysis;
