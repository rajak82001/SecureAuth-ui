import {
  FiGrid,
  FiFolder,
  FiBarChart2,
  FiCalendar,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiChevronRight,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-100 border-r border-gray-200 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-xl font-semibold text-gray-700">aps</span>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          <NavItem icon={<FiGrid />} label="Dashboard" path="/dashboard" />
          <NavItem icon={<FiFolder />} label="Projects" path="/dashboard/projects" />
          <NavItem icon={<FiBarChart2 />} label="Scans" path="/dashboard/scans" />
          <NavItem icon={<FiCalendar />} label="Schedule" path="/dashboard/schedule" />

          <div className="border-t border-gray-200 my-4"></div>

          <NavItem icon={<FiBell />} label="Notifications" path="/dashboard/notifications" />
          <NavItem icon={<FiSettings />} label="Settings" path="/dashboard/settings" />
          <NavItem icon={<FiHelpCircle />} label="Support" path="/dashboard/support" />
        </nav>
      </div>

      {/* Bottom User */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm text-gray-600">admin@edu.com</p>
              <p className="text-xs font-medium text-gray-800">
                Security Lead
              </p>
            </div>
          </div>
          <FiChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

/*  Clean NavItem */
function NavItem({ icon, label, path }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === path;

  return (
    <div
      onClick={() => navigate(path)}
      className={`flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer transition
      ${
        active
          ? "bg-[#0CC8A8]/20 text-[#0CC8A8] font-medium"
          : "text-gray-600 hover:bg-gray-200"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default Sidebar;