import { getUser } from "@/services/auth.service";
import React from "react";

const DashboardPage = async () => {
  await getUser();

  return <div>DashboardPage</div>;
};

export default DashboardPage;
