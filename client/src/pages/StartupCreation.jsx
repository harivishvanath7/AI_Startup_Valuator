import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "../config/config";

const StartupCreation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    stage: "",
    foundedYear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { ...formData, foundedYear: Number(formData.foundedYear) };

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/api/startups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    console.log("Status:", res.status);
    console.log("Startup Created:", data);

    if (!res.ok) {
      alert(data.message || "Failed to create startup.");
      return;
    }

    // Redirect to metrics form with startupId
    navigate(`/startups/${data.startup._id}/metrics`);
    console.log("CREATED ID:", data.startup._id);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-heading mb-6">Create Startup</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Startup Name"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <input
          name="industry"
          placeholder="Industry"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <select
          name="stage"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        >
          <option value="">Select Stage</option>
          <option value="idea">Idea</option>
          <option value="mvp">MVP</option>
          <option value="early">Early</option>
          <option value="growth">Growth</option>
          <option value="scale">Scale</option>
        </select>

        <input
          name="foundedYear"
          placeholder="Founded Year"
          className="w-full border p-3 rounded"
          onChange={handleChange}
        />

        <button className="bg-primary px-6 py-3 rounded">Create Startup</button>
      </form>
    </div>
  );
};

export default StartupCreation;
