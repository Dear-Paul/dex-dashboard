import React from 'react';
import Sidebar from './SideBar';
import TopBar from './TopBar';

const DashboardLayout = ({ children, pageTitle }) => {
  return (
    <div className="flex">
      <Sidebar />
      <section className="relative flex min-h-screen w-[calc(100%-206px)] p-4 flex-col bg-secondary">
        <div className="w-[97%] flex items-center mt-4 h-12 px-2 bg-white rounded-lg">
          <TopBar title={pageTitle} />
        </div>
        <div className="mt-6 flex-grow p-4">{children}</div>
      </section>
    </div>
  );
};

export default DashboardLayout;
