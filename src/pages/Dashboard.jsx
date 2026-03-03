import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Header />
          {/* <StatsSection />
          <ScanTable /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
