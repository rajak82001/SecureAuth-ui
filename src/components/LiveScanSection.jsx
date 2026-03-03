import { FiChevronDown, FiX } from "react-icons/fi";

function LiveScanSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mt-6 flex flex-col">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-700">
            Live Scan Console
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
            Running...
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <FiChevronDown />
          <FiX />
        </div>
      </div>

      {/* 🔹 Content Split */}
      <div className="grid grid-cols-3 min-h-[500px]">

        {/* ================= LEFT CONSOLE ================= */}
        <div className="col-span-2 border-r border-gray-200 flex flex-col">

          {/* Tabs */}
          <div className="flex gap-6 px-6 pt-4 border-b border-gray-200 text-sm">
            <button className="pb-3 border-b-2 border-[#0CC8A8] text-[#0CC8A8] font-medium">
              Activity Log
            </button>
            <button className="pb-3 text-gray-500 hover:text-gray-700">
              Verification Loops
            </button>
          </div>

          {/* Terminal */}
          <div className="flex-1 p-6 font-mono text-sm bg-gray-50 text-gray-700 overflow-y-auto space-y-4">

            <p>
              <span className="text-gray-400">[09:00:00]</span>{" "}
              I'll begin a systematic penetration test on{" "}
              <span className="text-[#0CC8A8]">
                helpdesk.democorp.com
              </span>.
            </p>

            <p>
              <span className="text-gray-400">[09:01:00]</span>{" "}
              Good! target is online. Now let me perform port scanning.
            </p>

            <p>
              <span className="text-gray-400">[09:02:00]</span>{" "}
              Excellent reconnaissance results:
              <br />
              - Apache httpd 2.4.65 on port 80
            </p>

            <p>
              <span className="text-gray-400">[09:03:00]</span>{" "}
              Found login page. Testing credential{" "}
              <span className="bg-gray-200 px-1 rounded text-gray-800">
                test:test
              </span>
            </p>

            <p>
              <span className="text-gray-400">[09:06:00]</span>{" "}
              Accessed dashboard using header{" "}
              <span className="bg-[#0CC8A8]/20 text-[#0CC8A8] px-1 rounded">
                X-UserId: 10032
              </span>
              . Possible{" "}
              <span className="text-red-500 font-semibold">
                IDOR vulnerability
              </span>.
            </p>

          </div>
        </div>

        {/* ================= RIGHT FINDING LOG ================= */}
        <div className="col-span-1 p-6 space-y-5 bg-gray-50">

          <h4 className="font-medium text-gray-700">
            Finding Log
          </h4>

          {/* Critical */}
          <FindingCard
            severity="Critical"
            color="red"
            title="SQL Injection in Authentication Endpoint"
            endpoint="/api/users/profile"
            time="10:45:23"
            description="Time-based blind SQL injection confirmed."
          />

          {/* High */}
          <FindingCard
            severity="High"
            color="orange"
            title="Unauthorized Access to User Metadata"
            endpoint="/api/auth/login"
            time="10:45:23"
            description="Access control checks were missing."
          />

          {/* Medium */}
          <FindingCard
            severity="Medium"
            color="yellow"
            title="Broken Authentication Rate Limiting"
            endpoint="/api/search"
            time="10:45:23"
            description="No effective rate limiting detected."
          />

        </div>
      </div>

      {/* 🔹 Bottom Status Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-t text-xs text-gray-500 bg-gray-50">

        <div className="flex gap-6">
          <span>Sub-Agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
        </div>

        <div className="flex gap-6">
          <span className="text-red-500">Critical: 0</span>
          <span className="text-orange-500">High: 0</span>
          <span className="text-yellow-500">Medium: 0</span>
          <span className="text-green-500">Low: 0</span>
        </div>

      </div>
    </div>
  );
}

/* 🔹 Finding Card */
function FindingCard({ severity, color, title, endpoint, time, description }) {
  const colorMap = {
    red: "bg-red-100 text-red-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs px-2 py-1 rounded-full ${colorMap[color]}`}
        >
          {severity}
        </span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      <h5 className="font-medium text-gray-800 text-sm">
        {title}
      </h5>

      <p className="text-xs text-[#0CC8A8] mt-1">{endpoint}</p>

      <p className="text-xs text-gray-500 mt-2">
        {description}
      </p>
    </div>
  );
}

export default LiveScanSection;