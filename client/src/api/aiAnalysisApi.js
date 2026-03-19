// const API_BASE = "http://localhost:5000/api";
import API_BASE from "../config/config";

const runAnalysis = async (startupId) => {

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/api/ai/analyzeStartup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ startupId })
    });

    return res.json();
}

export default {
    runAnalysis
};