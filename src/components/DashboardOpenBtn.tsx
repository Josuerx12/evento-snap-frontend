"use client";
import { useMenuContext } from "@/context/MenuContext";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardOpenBtn = () => {
  const pathname = usePathname();

  const { handleOpen, isOpen } = useMenuContext();

  if (!pathname.includes("dashboard") && !pathname.includes("galerias")) {
    return;
  }

  return (
    <button
      onClick={handleOpen}
      className="bg-eventosnap-beige text-eventosnap-dark rounded-full cursor-pointer p-1 md:p-2 shadow transition-all duration-300 hover:bg-eventosnap-gold hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eventosnap-gold"
    >
      {!isOpen && <Menu className="w-4 h-4 md:w-5 md:h-5" />}
      {isOpen && <X className="w-4 h-4 md:w-5 md:h-5" />}
    </button>
  );
};

export default DashboardOpenBtn;
