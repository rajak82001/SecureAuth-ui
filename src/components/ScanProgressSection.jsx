import { FiSearch, FiGitBranch, FiTool, FiCheckSquare, FiFileText } from "react-icons/fi";

export default function ScanProgressSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

      {/* 🔹 Top Section */}
      <div className="flex items-center gap-10">

        {/* 🟢 Circular Progress */}
        <div className="flex items-center gap-6">
          <div className="relative w-28 h-28">
            <div className="w-28 h-28 rounded-full bg-[#0E1A2B] flex flex-col items-center justify-center text-white">
              <span className="text-3xl font-semibold text-[#0CC8A8]">0%</span>
              <span className="text-xs text-gray-300">In Progress</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-24 w-px bg-gray-200"></div>
        </div>

        {/* 🟢 Step Tracker */}
        <div className="flex-1">
          <div className="flex items-center justify-between relative">

            {/* Line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-gray-200"></div>

            {/* Step 1 Active */}
            <Step
              icon={<FiSearch />}
              label="Spidering"
              active
            />

            <Step icon={<FiGitBranch />} label="Mapping" />
            <Step icon={<FiTool />} label="Testing" />
            <Step icon={<FiCheckSquare />} label="Validating" />
            <Step icon={<FiFileText />} label="Reporting" />
          </div>
        </div>
      </div>

      {/* 🔹 Metadata Row */}
      <div className="grid grid-cols-6 gap-6 mt-8 text-sm border-t pt-6">

        <Meta label="Scan Type" value="Grey Box" />
        <Meta label="Targets" value="google.com" />
        <Meta label="Started At" value="Nov 22, 09:00AM" />
        <Meta label="Credentials" value="2 Active" />
        <Meta label="Files" value="Control.pdf" />
        <Meta
          label="Checklists"
          value={<span className="text-[#0CC8A8] font-medium">40/350</span>}
        />
      </div>
    </div>
  );
}

/* 🔹 Step Component */
function Step({ icon, label, active }) {
  return (
    <div className="flex flex-col items-center relative z-10">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border
        ${
          active
            ? "bg-[#0CC8A8] text-white border-[#0CC8A8]"
            : "bg-white text-gray-400 border-gray-300"
        }`}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-600 mt-2">{label}</span>
    </div>
  );
}

/* 🔹 Metadata Item */
function Meta({ label, value }) {
  return (
    <div>
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  );
}