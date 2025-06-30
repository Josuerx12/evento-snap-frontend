"use client";
import { useRouter } from "next/navigation";
import React, { HTMLAttributes } from "react";

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  href?: string;
}

const TableRow = (props: TableRowProps) => {
  const router = useRouter();

  function handleClick() {
    if (props.href) {
      router.push(props.href);
    }
  }

  return <tr onClick={handleClick} {...props} />;
};

export default TableRow;
