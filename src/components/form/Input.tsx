import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

const Input = (props: InputProps) => {
  return (
    <input
      className={clsx(
        "w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        props.className
      )}
      {...props}
    />
  );
};

export default Input;
