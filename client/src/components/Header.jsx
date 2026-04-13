import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed", error);
    }

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-heading text-dark">Dashboard</h2>

      <button
        onClick={handleLogout}
        className="bg-primary px-4 py-2 rounded-lg font-body"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
