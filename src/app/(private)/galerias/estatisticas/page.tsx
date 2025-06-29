import { getUser } from "@/services/auth.service";
import React from "react";
import StatisticsSection from "../sections/StatisticsSection";

const GaleryStatisticsPage = async () => {
  const user = await getUser();
  return (
    <div className="min-h-screen bg-eventosnap-off-white text-eventosnap-dark animate-fade-in px-6 py-12">
      <h2 className="text-4xl mb-4">Bem vindo de volta, {user?.name}!</h2>

      <StatisticsSection />
    </div>
  );
};

export default GaleryStatisticsPage;
