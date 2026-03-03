import ScanProgressSection from "../components/ScanProgressSection";
import LiveScanSection from "../components/LiveScanSection";
import DashboardHeader from "../components/DashboardHeader";

 function ScanDetail() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">

        {/* Row 1 → DashboardHeader */}
        <DashboardHeader />

        {/* Row 2 → Progress Section */}
        <ScanProgressSection />

        {/* Row 3 → Live Console Section */}
        <LiveScanSection />

      </div>
    </div>
  );
}

export default ScanDetail;