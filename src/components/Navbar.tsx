import React from "react";
import NavLinks from "./NavLinks";
import { getUser, logout } from "@/services/auth.service";

const Navbar = async () => {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <header className="bg-eventosnap-dark text-eventosnap-beige py-4 items-center mt-auto flex justify-between px-14">
      <img
        className="w-28 h-28 object-fill rounded"
        src={"/eventosnapcomfundo.png"}
        alt="Logo da eventosnap"
      />

      <nav>
        <ul className="flex gap-4 items-center">
          <li title="Ir para pagina inicial">
            <NavLinks href={"/"}>Pagina Inicial</NavLinks>
          </li>
          {user && (
            <>
              <li title="Ir para dashboard">
                <NavLinks href={"/dashboard"}>Galerias</NavLinks>
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
