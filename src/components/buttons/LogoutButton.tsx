import { logout } from "@/services/auth.service";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutButton = () => {
  return (
    <>
      {" "}
      <form action={logout}>
        <button
          type="submit"
          className="bg-red-500 rounded w-full flex items-center justify-between gap-2 p-2 text-white duration-200 cursor-pointer hover:bg-red-700"
        >
          Desconectar <LogOut className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default LogoutButton;
