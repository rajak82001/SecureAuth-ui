import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Dashboard Layout Route */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* /dashboard */}
        <Route index element={<Dashboard />} />

        {/* /dashboard/scans */}
        <Route path="scans" element={<ScanDetail />} />

        {/* Future routes can be added here */}
        <Route path="projects" element={<div className="p-6">Projects Page</div>} />
        <Route path="schedule" element={<div className="p-6">Schedule Page</div>} />
        <Route path="notifications" element={<div className="p-6">Notifications Page</div>} />
        <Route path="settings" element={<div className="p-6">Settings Page</div>} />
        <Route path="support" element={<div className="p-6">Support Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;