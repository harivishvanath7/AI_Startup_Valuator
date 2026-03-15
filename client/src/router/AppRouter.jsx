import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";

import StartupCreation from "../pages/StartupCreation";
import StartupMetricsForm from "../pages/StartupMetricsForm";
import StartupAnalysis from "../pages/StartupAnalysis";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/startups/create" element={<StartupCreation />} />
          <Route
            path="/startups/:startupId/metrics"
            element={<StartupMetricsFormWrapper />}
          />
          <Route
            path="/startups/:startupId/analysis"
            element={<StartupAnalysis />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Wrapper to get startupId from URL

const StartupMetricsFormWrapper = () => {
  const { startupId } = useParams();
  return <StartupMetricsForm startupId={startupId} />;
};

export default AppRouter;
