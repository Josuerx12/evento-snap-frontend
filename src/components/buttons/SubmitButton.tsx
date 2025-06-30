"use client";
import { Loader } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

const SubmitButton = ({ children, icon, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-eventosnap-gold text-white hover:bg-eventosnap-gold/90 focus:bg-eventosnap-gold/90 active:bg-eventosnap-gold/80 transition-colors duration-200 rounded-lg px-4 py-2 inline-flex items-center gap-2 cursor-pointer"
      disabled={pending}
      {...rest}
    >
      {children} {pending ? <Loader className="w-6 h-6 animate-spin" /> : icon}
    </button>
  );
};

export default SubmitButton;
