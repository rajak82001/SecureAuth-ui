import { FiSearch, FiFilter, FiColumns, FiPlus } from "react-icons/fi";

function ScanTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6">

      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        
        {/* Search */}
        <div className="relative w-1/2">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#0CC8A8] focus:outline-none"
          />
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition">
            <FiFilter />
            Filter
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition">
            <FiColumns />
            Column
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0CC8A8] text-white text-sm hover:bg-[#0ab89a] transition">
            <FiPlus />
            New scan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          {/* Header */}
          <thead className="text-gray-500 border-b border-gray-200">
            <tr className="text-left">
              <th className="p-4">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerability</th>
              <th>Last Scan</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            
            {/* Row 1 */}
            <tr className="hover:bg-gray-50 transition">
              <td className="p-4 font-medium text-gray-800">
                Web App Servers
              </td>
              <td>Greybox</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-600">
                  Completed
                </span>
              </td>

              {/* Progress */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="w-28 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#0CC8A8] rounded-full w-full"></div>
                  </div>
                  <span>100%</span>
                </div>
              </td>

              {/* Vulnerabilities */}
              <td>
                <div className="flex gap-2">
                  <Badge color="red" value="5" />
                  <Badge color="orange" value="12" />
                  <Badge color="yellow" value="23" />
                  <Badge color="green" value="18" />
                </div>
              </td>

              <td className="text-gray-500">4d ago</td>
            </tr>

            {/* Scheduled Example */}
            <tr className="hover:bg-gray-50 transition">
              <td className="p-4 font-medium text-gray-800">
                Web App Servers
              </td>
              <td>Greybox</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-600">
                  Scheduled
                </span>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="w-28 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[#0CC8A8] rounded-full w-full"></div>
                  </div>
                  <span>100%</span>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <Badge color="red" value="5" />
                  <Badge color="orange" value="12" />
                </div>
              </td>

              <td className="text-gray-500">4d ago</td>
            </tr>

            {/* Failed Example */}
            <tr className="hover:bg-gray-50 transition">
              <td className="p-4 font-medium text-gray-800">
                IoT Devices
              </td>
              <td>Blackbox</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-600">
                  Failed
                </span>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="w-28 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full w-[10%]"></div>
                  </div>
                  <span>10%</span>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <Badge color="red" value="2" />
                  <Badge color="orange" value="4" />
                  <Badge color="yellow" value="8" />
                  <Badge color="green" value="1" />
                </div>
              </td>

              <td className="text-gray-500">3d ago</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Vulnerability Badge */
function Badge({ color, value }) {
  const colors = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <span
      className={`px-2 py-1 text-xs text-white rounded-md ${colors[color]}`}
    >
      {value}
    </span>
  );
}

export default ScanTable;