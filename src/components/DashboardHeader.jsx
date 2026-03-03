import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineWarning } from "react-icons/ai";
import { MdBlock  } from "react-icons/md";
// import { AiOutlineWarning } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

/* 🔹 Reusable Info Item */
function Info({ label, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500">{label}:</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

const DashboardHeader = () => {
  return (
    <div className="space-y-6">
      {/* 🔹 Top Breadcrumb + Buttons */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="font-medium text-gray-700">Scan</span>
          <span>/</span>
          <span>Private Assets</span>
          <span>/</span>
          <span className="text-[#0CC8A8] font-medium">New Scan</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition">
            Export Report
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-100 text-red-600 text-sm hover:bg-red-200 transition">
            Stop Scan
          </button>
        </div>
      </div>

      {/*  Org Info Row */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-t border-b py-4">
        <Info label="Org" value="Project X" />
        <Info label="Owner" value="Nammagiri" />
        <Info label="Total Scans" value="100" />
        <Info label="Scheduled" value="1000" />
        <Info label="Rescans" value="100" />
        <Info label="Failed Scans" value="100" />

        <div className="flex items-center gap-2 ml-auto text-gray-500">
          <FiRefreshCw className="text-[#0CC8A8]" />
          <span>10 mins ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/*  Critical */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-500">Critical Severity</h4>
            <div className="p-2 rounded-lg bg-red-100">
              <MdBlock className="text-red-600 text-lg" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-4 text-3xl font-semibold text-gray-800">86</div>

            <p className="text-xs mt-2 text-red-600 items-center pt-5">
              ↑ +2% increase than yesterday
            </p>
          </div>
        </div>

        {/*  High */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-500">High Severity</h4>
            <div className="p-2 rounded-lg bg-orange-100">
              <AiOutlineWarning className="text-orange-500 text-lg" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-4 text-3xl font-semibold text-gray-800">16</div>

            <p className="text-xs mt-2 text-orange-500 items-center pt-5">
              ↑ +0.9% increase than yesterday
            </p>
          </div>
        </div>

        {/*  Medium */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-500">Medium Severity</h4>
            <div className="p-2 rounded-lg bg-yellow-100">
              <FiAlertTriangle className="text-yellow-500 text-lg" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-4 text-3xl font-semibold text-gray-800">26</div>

            <p className="text-xs mt-2 text-green-600 items-center pt-5">
              ↓ +0.9% decrease than yesterday
            </p>
          </div>
        </div>

        {/*  Low */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-500">Low Severity</h4>
            <div className="p-2 rounded-lg bg-blue-100">
              <BiSearch className="text-blue-600 text-lg" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-4 text-3xl font-semibold text-gray-800">16</div>

            <p className="text-xs mt-2 text-red-600 items-center pt-5">
              ↑ +0.9% increase than yesterday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
