import { getUser } from "@/services/auth.service";
import React from "react";
import StatisticsSection from "./sections/StatisticsSection";
import EventsSection from "./sections/EventsSection";

const GaleryStatisticsPage = async () => {
  const user = await getUser();
  return (
    <div className="min-h-screen w-full bg-eventosnap-off-white text-eventosnap-dark animate-fade-in p-6">
      <h2 className="text-4xl mb-4">Bem vindo de volta, {user?.name}!</h2>

      <StatisticsSection />

      <EventsSection />
    </div>
  );
};

export default GaleryStatisticsPage;
