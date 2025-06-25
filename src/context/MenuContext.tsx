"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type MenuContextT = {
  isOpen: boolean;
  handleOpen: () => void;
};

export const Context = createContext<MenuContextT>({} as MenuContextT);

const MenuContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Context.Provider value={{ isOpen, handleOpen }}>
      {children}
    </Context.Provider>
  );
};

export default MenuContext;

export function useMenuContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Contexto não existe");
  }

  return context;
}
