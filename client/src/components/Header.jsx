import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h2 className="text-xl font-heading text-dark">Dashboard</h2>

      <button className="bg-primary px-4 py-2 rounded-lg font-body">
        Logout
      </button>
    </header>
  );
};

export default Header;
