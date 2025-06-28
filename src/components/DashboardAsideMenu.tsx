"use client";
import clsx from "clsx";
import { useMenuContext } from "@/context/MenuContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const DashboardAsideMenu = () => {
  const pathname = usePathname();

  const { isOpen } = useMenuContext();

  const router = useRouter();

  function isPath(path: string): boolean {
    return pathname.includes(path);
  }

  return (
    <aside
      className={clsx(
        "bg-eventosnap-beige min-h-screen transition-all duration-300 overflow-hidden",
        {
          "w-80 px-4": isOpen,
          "w-0": !isOpen,
        }
      )}
    >
      <h4 className="text-lg font-semibold text-center mt-2">Dashboard</h4>

      <ul className="mt-4 w-11/12 mx-auto flex gap-y-2 flex-col">
        <li
          onClick={() => router.push("/dashboard/metricas")}
          className={clsx(
            "hover:bg-eventosnap-dark cursor-pointer hover:text-eventosnap-beige duration-150 p-2 w-full rounded",
            {
              "bg-eventosnap-dark text-eventosnap-beige": isPath("metricas"),
            }
          )}
        >
          Métricas
        </li>
        <li
          onClick={() => router.push("/dashboard/planos")}
          className={`hover:bg-eventosnap-dark cursor-pointer hover:text-eventosnap-beige duration-150 p-2 w-full rounded ${
            isPath("planos") && "bg-eventosnap-dark text-eventosnap-beige"
          }`}
        >
          Planos
        </li>
        <li
          onClick={() => router.push("/dashboard/assinantes")}
          className={`hover:bg-eventosnap-dark cursor-pointer hover:text-eventosnap-beige duration-150 p-2 w-full rounded ${
            isPath("assinantes") && "bg-eventosnap-dark text-eventosnap-beige"
          }`}
        >
          Assinantes
        </li>
      </ul>
    </aside>
  );
};

export default DashboardAsideMenu;
