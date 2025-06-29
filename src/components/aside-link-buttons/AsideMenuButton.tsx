"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AsideMenuButton = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const pathname = usePathname();

  function isPath(pathName: string): boolean {
    return pathname.includes(pathName);
  }

  return (
    <button
      onClick={() => router.push(path)}
      className={clsx(
        "hover:bg-eventosnap-dark text-start cursor-pointer flex justify-between items-center hover:text-eventosnap-beige duration-150 p-2 w-full  rounded",
        {
          "bg-eventosnap-dark text-eventosnap-beige": isPath(path),
        }
      )}
    >
      {children}
    </button>
  );
};

export default AsideMenuButton;
