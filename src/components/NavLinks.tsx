import Link from "next/link";
import React, { ReactNode } from "react";

const NavLinks = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} className="hover:text-eventosnap-gold duration-200">
      {children}
    </Link>
  );
};

export default NavLinks;
