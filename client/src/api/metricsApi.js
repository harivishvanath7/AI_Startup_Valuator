// const API_BASE = "http://localhost:5000/api";
import API_BASE from "../config/config";


const addMetrics = async (startupId, data) => {

    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE}/metrics/${startupId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

export default {
    addMetrics
};