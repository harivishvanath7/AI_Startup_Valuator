const ValuationCard = ({ data }) => {

  return (
    <div className="bg-white shadow p-6 rounded">

      <h2 className="text-xl font-semibold">
        Startup Valuation
      </h2>

      <p className="text-3xl font-bold mt-2">
        ${data.valuation.toLocaleString()}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Range: ${data.valuationRange.low} - ${data.valuationRange.high}
      </p>

      <p className="text-sm">
        Confidence: {(data.confidenceScore * 100).toFixed(0)}%
      </p>

    </div>
  );
};

export default ValuationCard;