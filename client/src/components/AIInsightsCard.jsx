const AIInsightsCard = ({ insights }) => {

  return (
    <div className="bg-white shadow p-6 rounded">

      <h2 className="text-xl font-semibold">
        AI Insights
      </h2>

      <div className="mt-3">

        <h3 className="font-semibold">Strengths</h3>
        <ul className="list-disc ml-6">
          {insights.strengths.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h3 className="font-semibold mt-4">Weaknesses</h3>
        <ul className="list-disc ml-6">
          {insights.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
        </ul>

        <h3 className="font-semibold mt-4">Growth Suggestions</h3>
        <ul className="list-disc ml-6">
          {insights.growthSuggestions.map((g, i) => <li key={i}>{g}</li>)}
        </ul>

      </div>

    </div>
  );
};

export default AIInsightsCard;