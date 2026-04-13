import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 min-h-full bg-dark text-white p-6 flex flex-col">
      <h1 className="text-2xl font-heading mb-10">StartupAI</h1>

      <nav className="flex flex-col gap-4 font-body">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/startups">Startups</Link>

        <Link to="/startups/create">Create Startup</Link>

        {/* <Link to="/metrics">Metrics</Link>

        <Link to="/reports">Reports</Link> */}
      </nav>
    </aside>
  );
};

export default SideBar;
