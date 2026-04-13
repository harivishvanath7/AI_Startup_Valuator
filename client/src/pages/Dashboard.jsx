import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE from "../config/config";
import startupApi from "../api/startupApi";

const Dashboard = () => {
  const [startups, setStartups] = useState([]);
  // Add loading Screen logic
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/startups`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        setStartups(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, [token]);
  console.log(startups);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl">Loading Dashboard...</h1>
      </div>
    );
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");

    if (!confirmDelete) return;

    try {
      await startupApi.deleteStartup(id);

      setStartups((prev) => prev.filter((s) => s._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // const valuations = startups
  //   .map((s) => Number(s.aiAnalysis?.valuation?.valuation))
  //   .filter((value) => Number.isFinite(value) && value > 0);

  // const avgValuation =
  //   valuations.length > 0
  //     ? valuations.reduce((acc, value) => acc + value, 0) / valuations.length
  //     : 0;

  const analysesDone = startups.filter((s) => s.aiAnalysis).length;

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
          <h2 className="text-2xl font-bold">{analysesDone}</h2>
        </div>

        {/* <div className="bg-card p-6 rounded-xl shadow">
          <p className="text-gray-500">Avg Valuation</p>
          <h2 className="text-2xl font-bold">{avgValuation.toFixed(0)}</h2>
        </div> */}
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

                <div>
                  <button
                    onClick={() => handleDelete(startup._id)}
                    className="bg-red-400 text-white px-4 py-2 mt-2 mr-2 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/startups/${startup._id}/analysis`)
                    }
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                  >
                    View Analysis
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
