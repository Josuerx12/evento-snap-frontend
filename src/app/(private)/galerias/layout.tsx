import GaleryAsideMenu from "@/components/GaleryAsideMenu";
import React from "react";

export const dynamic = "force-dynamic";

const GaleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-min-screen inline-flex w-full">
      <GaleryAsideMenu />
      {children}
    </main>
  );
};

export default GaleryLayout;
