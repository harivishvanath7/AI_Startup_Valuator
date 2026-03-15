const InvestorScoreCard = ({ data }) => {

  return (
    <div className="bg-white shadow p-6 rounded">

      <h2 className="text-xl font-semibold">
        Investor Readiness
      </h2>

      <p className="text-4xl font-bold mt-2">
        {data.investorScore} / 100
      </p>

      <p className="mt-2 text-gray-600">
        {data.explanation}
      </p>

    </div>
  );
};

export default InvestorScoreCard;