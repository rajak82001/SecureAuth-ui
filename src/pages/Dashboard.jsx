import DashboardHeader from "../components/DashboardHeader";
import ScanTable from "../components/ScanTable";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <DashboardHeader />
      <ScanTable />
    </div>
  );
};

export default Dashboard;