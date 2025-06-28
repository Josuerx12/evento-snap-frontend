import { getUser } from "@/services/auth.service";
import React from "react";

const GaleryPage = async () => {
  const user = await getUser();
  return (
    <div className="min-h-screen">
      <h2 className="text-4xl">Bem vindo de volta, {user?.name}!</h2>
    </div>
  );
};

export default GaleryPage;
