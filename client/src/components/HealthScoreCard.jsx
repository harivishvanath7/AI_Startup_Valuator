const HealthScoreCard = ({ data }) => {

  return (
    <div className="bg-white shadow p-6 rounded">

      <h2 className="text-xl font-semibold">
        Startup Health Score
      </h2>

      <p className="text-4xl font-bold mt-2">
        {data} / 100
      </p>

    </div>
  );
};

export default HealthScoreCard;