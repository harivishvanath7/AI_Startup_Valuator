// const API_BASE = "http://localhost:5000/api";
import API_BASE from "../config/config";

const createStartup = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/api/startups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

const getAllStartups = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/api/startups`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

const deleteStartup = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/api/startups/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const contentType = res.headers.get("content-type") || "";
  let data;

  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    const text = await res.text();
    if (!res.ok) {
      throw new Error(text || "Delete failed");
    }
    return { message: "Deleted" };
  }

  if (!res.ok) {
    throw new Error(data?.message || "Delete failed");
  }

  return data;
};

export default {
  createStartup,
  getAllStartups,
  deleteStartup,
};
