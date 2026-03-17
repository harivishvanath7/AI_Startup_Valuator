import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StartupMetricsForm = () => {
  const navigate = useNavigate();

  const { startupId } = useParams();
  
  console.log("METRICS PAGE ID:", startupId);

  const [formData, setFormData] = useState({
    monthlyRevenue: "",
    growthRate: "",
    customerCount: "",
    burnRate: "",
    marketSize: "",
    CAC: "",
    LTV: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startupId || startupId === "undefined") {
      alert("Startup ID missing. Please try again.");
      return;
    }

    const body = { ...formData, startupId };

    const res = await fetch("http://localhost:5000/api/metrics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("Metrics Saved:", data);

    navigate(`/startups/${startupId}/analysis`);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-heading mb-6">Enter Startup Metrics</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="monthlyRevenue"
          placeholder="Monthly Revenue"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="growthRate"
          placeholder="Growth Rate (%)"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="customerCount"
          placeholder="Customer Count"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="burnRate"
          placeholder="Burn Rate"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="marketSize"
          placeholder="Market Size"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="CAC"
          placeholder="CAC"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <input
          name="LTV"
          placeholder="LTV"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />
        <button className="bg-primary px-6 py-3 rounded">Save Metrics</button>
      </form>
    </div>
  );
};

export default StartupMetricsForm;
