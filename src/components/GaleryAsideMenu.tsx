"use client";
import { useMenuContext } from "@/context/MenuContext";
import clsx from "clsx";
import React from "react";
import AsideMenuButton from "./aside-link-buttons/AsideMenuButton";
import { BookImage, ChartLine, Settings } from "lucide-react";
import LogoutButton from "./buttons/LogoutButton";

const GaleryAsideMenu = () => {
  const { isOpen } = useMenuContext();

  return (
    <aside
      className={clsx(
        "bg-eventosnap-beige z-20 fixed md:relative min-h-screen transition-all duration-300 overflow-hidden",
        {
          "w-full translate-x-0 left-0 md:max-w-96 md:h-full px-4": isOpen,
          "w-full  -translate-x-full left-0 md:w-0": !isOpen,
        }
      )}
    >
      <h2 className="text-xl text-center my-2 md:text-2xl font-bold text-eventosnap-dark">
        Menu de Galerias
      </h2>

      <ul className="mt-4 w-11/12 mx-auto flex gap-y-2 flex-col">
        <li>
          <AsideMenuButton path="/galerias/estatisticas">
            Estatísticas <ChartLine className="w-6 h-6" />
          </AsideMenuButton>
        </li>
        <li>
          <AsideMenuButton path="/galerias/criar">
            Nova Galeria <BookImage className="w-6 h-6" />
          </AsideMenuButton>
        </li>

        <li>
          <AsideMenuButton path="/configuracoes">
            Configurações <Settings className="w-6 h-6" />
          </AsideMenuButton>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </aside>
  );
};

export default GaleryAsideMenu;
