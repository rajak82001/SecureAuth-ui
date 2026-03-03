import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 bg-gray-50 min-h-screen p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;