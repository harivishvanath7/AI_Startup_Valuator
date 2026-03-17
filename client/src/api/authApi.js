// const API_BASE = "http://localhost:5000/api";
import API_BASE from "../config/config";


// Auth API

// Signup
export const signupUser = async (data) => {
    const res = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

// Login
export const loginUser = async (data) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}