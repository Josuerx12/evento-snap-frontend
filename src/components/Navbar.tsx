import React from "react";
import NavLinks from "./NavLinks";
import { getUser } from "@/services/auth.service";
import DashboardOpenBtn from "./DashboardOpenBtn";
import Link from "next/link";
import { SwitchCamera } from "lucide-react";

const Navbar = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <header className="bg-eventosnap-dark text-eventosnap-beige py-6 items-center mt-auto flex justify-between px-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <DashboardOpenBtn />
        <Link
          href={"/"}
          title="Ir para pagina inicial"
          className="flex items-center gap-2 relative hover:opacity-90 transition duration-200"
        >
          <SwitchCamera className="w-6 h-6 text-eventosnap-gold inline-block -top-3.5 right-0 absolute" />
          <h1 className="text-2xl font-bold text-eventosnap-beige!">
            EventoSnap
          </h1>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-4 items-center">
          {user && (
            <>
              <li title="Ir para dashboard">
                <NavLinks href={"/galerias/estatisticas"}>Galerias</NavLinks>
              </li>
              <li title="Ir para dashboard">
                <NavLinks href={"/dashboard/metricas"}>Dashboard</NavLinks>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
