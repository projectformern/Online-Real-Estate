import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashContent from "./DashContent";
import Footer from "./Footer";

const DashboardHome = () => {
  return (
    <div className="wrapper h-screen w-full">
      <div className="flex">
        <Sidebar />
        <main className="w-full">
          <div className="page-wrapper overflow-hidden max-h-screen h-screen flex flex-col">
            <div className="page-header">
              <Topbar />
            </div>
            <DashContent />
            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardHome;
