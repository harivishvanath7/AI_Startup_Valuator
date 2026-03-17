import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [startups, setStartups] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStartups = async () => {
      const res = await fetch("http://localhost:5000/api/startups", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      setStartups(data);
    };

    fetchStartups();
  }, []);
  console.log(startups);
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-heading">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Startups</p>
          <h2 className="text-2xl font-bold">{startups.length}</h2>
        </div>

        <div className="bg-card p-6 rounded-xl shadow">
          <p className="text-gray-500">Analyses Done</p>
          <h2 className="text-2xl font-bold">--</h2>
        </div>

        <div className="bg-card p-6 rounded-xl shadow">
          <p className="text-gray-500">Avg Valuation</p>
          <h2 className="text-2xl font-bold">$ --</h2>
        </div>
      </div>

      {/* Startups List */}
      <div className="bg-card p-6 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-heading">Your Startups</h2>

          <Link
            to="/startups/create"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            + Create Startup
          </Link>
        </div>

        <div className="space-y-4">
          {startups.map((startup) => {
            console.log("Startup Object", startup);

            return (
              <div
                key={startup._id}
                className="flex justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-bold">{startup.name}</h3>
                  <p className="text-sm text-gray-500">
                    {startup.industry} • {startup.stage}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/startups/${startup._id}/analysis`)}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                >
                  View Analysis
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
