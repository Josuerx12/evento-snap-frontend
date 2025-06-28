import React from "react";
import NavLinks from "./NavLinks";
import { getUser, logout } from "@/services/auth.service";
import DashboardOpenBtn from "./DashboardOpenBtn";
import Link from "next/link";

const Navbar = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <header className="bg-eventosnap-dark text-eventosnap-beige py-4 items-center mt-auto flex justify-between px-14">
      <div className="flex items-center gap-4">
        <DashboardOpenBtn />
        <Link href={"/"} title="Ir para pagina inicial">
          <img
            className="w-28 h-28 object-fill rounded"
            src={"/eventosnapcomfundo.png"}
            alt="Logo da eventosnap"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-4 items-center">
          {user && (
            <>
              <li title="Ir para dashboard">
                <NavLinks href={"/galerias"}>Galerias</NavLinks>
              </li>
              <li title="Ir para dashboard">
                <NavLinks href={"/dashboard/metricas"}>Dashboard</NavLinks>
              </li>
              <li>
                <form action={logout}>
                  <button
                    type="submit"
                    className="bg-red-500 rounded p-2 text-white duration-200 cursor-pointer hover:bg-red-700"
                  >
                    Sair
                  </button>
                </form>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
