"use client";
import clsx from "clsx";
import { useMenuContext } from "@/context/MenuContext";
import React from "react";
import LogoutButton from "./buttons/LogoutButton";
import AsideMenuButton from "./aside-link-buttons/AsideMenuButton";
import { BanknoteArrowUp, ChartLine, Coins } from "lucide-react";

const DashboardAsideMenu = () => {
  const { isOpen } = useMenuContext();

  return (
    <aside
      className={clsx(
        "bg-eventosnap-beige fixed md:relative min-h-screen transition-all z-20 duration-300 overflow-hidden",
        {
          "w-full translate-x-0 left-0 md:max-w-96 md:h-full px-4": isOpen,
          "w-full  -translate-x-full left-0 md:w-0": !isOpen,
        }
      )}
    >
      <h2 className="text-xl text-center my-2 md:text-2xl font-bold text-eventosnap-dark">
        Menu Administrativo
      </h2>

      <ul className="mt-4 w-11/12 mx-auto flex gap-y-2 flex-col">
        <li>
          <AsideMenuButton path="/dashboard/metricas">
            Métricas <ChartLine className="w-6 h-6" />
          </AsideMenuButton>
        </li>
        <li>
          <AsideMenuButton path="/dashboard/planos">
            Planos <Coins className="w-6 h-6" />
          </AsideMenuButton>
        </li>
        <li>
          <AsideMenuButton path="/dashboard/assinantes">
            Assinantes <BanknoteArrowUp className="w-6 h-6" />
          </AsideMenuButton>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </aside>
  );
};

export default DashboardAsideMenu;
