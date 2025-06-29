import DashboardAsideMenu from "@/components/DashboardAsideMenu";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-min-screen inline-flex w-full">
      <DashboardAsideMenu />
      {children}
    </main>
  );
};

export default DashboardLayout;
