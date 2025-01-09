import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import Dashboard from "../pages/Dashboard";

/**
 * Define application routes
 * @returns {JSX.Element} The router configuration for the application
 */
export default function Router() {
  return (
    <Routes>
      {/* Redirect to default user */}
      <Route path="/" element={<Navigate to={ROUTES.dashboard("12")} replace />} />

      {/* Main dashboard route */}
      <Route path={ROUTES.dashboard(":userId")} element={<Dashboard />} />
    </Routes>
  );
}
