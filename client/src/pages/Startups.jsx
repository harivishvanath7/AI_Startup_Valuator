import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import startupApi from "../api/startupApi";

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const data = await startupApi.getAllStartups();
        setStartups(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this startup?");
    if (!confirmDelete) return;

    try {
      await startupApi.deleteStartup(id);
      setStartups((prev) => prev.filter((startup) => startup._id !== id));
    } catch (error) {
      console.error(error);
      alert(error.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl">Loading startups...</h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading">Your Startups</h1>
          <p className="text-gray-500 mt-1">
            Manage your startup profiles, enter metrics, and run analysis.
          </p>
        </div>

        <Link
          to="/startups/create"
          className="bg-primary text-white px-5 py-3 rounded-lg"
        >
          Create Startup
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {startups.length === 0 ? (
          <div className="bg-card p-8 rounded-xl shadow text-center">
            <p className="text-gray-500">No startups created yet.</p>
            <Link
              to="/startups/create"
              className="mt-4 inline-block bg-primary text-white px-5 py-3 rounded-lg"
            >
              Create your first startup
            </Link>
          </div>
        ) : (
          startups.map((startup) => (
            <div
              key={startup._id}
              className="bg-card p-6 rounded-3xl shadow-lg border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{startup.name}</h2>
                  <p className="mt-1 text-gray-500">
                    {startup.industry} • {startup.stage}
                  </p>
                  <p className="mt-3 text-gray-600 max-w-2xl">
                    Founded: {startup.foundedYear || "Unknown"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate(`/startups/${startup._id}/metrics`)}
                    className="bg-green-500 bg-secondary text-white px-4 py-2 rounded-lg"
                  >
                    Add Metrics
                  </button>
                  <button
                    onClick={() => navigate(`/startups/${startup._id}/analysis`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    View Analysis
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                {/* <span>
                  Metrics saved: {startup.metrics?.monthlyRevenue ? "Yes" : "No"}
                </span> */}
                <span>
                  AI analysis: {startup.aiAnalysis ? "Ready" : "Not generated"}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => handleDelete(startup._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Startups;
