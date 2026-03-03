import React from "react";

const ScanDetail = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <TopProgressSection />
        <MetadataRow />
        <BottomSplit />
      </div>
    </div>
  );
};

export default ScanDetail;
