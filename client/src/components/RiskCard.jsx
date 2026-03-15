const RiskCard = ({ data }) => {

  return (
    <div className="bg-white shadow p-6 rounded">

      <h2 className="text-xl font-semibold">
        Risk Analysis
      </h2>

      <p className="text-lg mt-2">
        Risk Score: {data.riskScore}
      </p>

      <ul className="list-disc ml-6 mt-3">

        {data.risks.map((risk, index) => (
          <li key={index}>{risk}</li>
        ))}

      </ul>

    </div>
  );
};

export default RiskCard;