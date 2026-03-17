import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold font-[var(--font-heading)]">
          AI Valuator
        </h1>

        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 text-sm border border-[var(--color-dark)] rounded-lg hover:bg-[var(--color-dark)] hover:text-white transition">
              Login
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h1 className="text-5xl md:text-6xl font-[var(--font-heading)] leading-tight">
          Evaluate Your Startup <br />
          <span className="text-[var(--color-primary)]">
            Like a VC
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600">
          Get AI-powered insights on your startup’s strengths, weaknesses,
          and investment potential — in seconds.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link to="/signup">
            <button className="px-8 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-xl shadow-md hover:scale-105 transition">
              Start Analysis 🚀
            </button>
          </Link>

          <Link to="/login">
            <button className="px-8 py-3 border border-[var(--color-dark)] rounded-xl hover:bg-[var(--color-dark)] hover:text-white transition">
              Login
            </button>
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        Built for founders • By Hari Vishvanath S @ 2026
      </footer>

    </div>
  );
};

export default Home;