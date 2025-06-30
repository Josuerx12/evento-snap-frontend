"use client";

import { FormHTMLAttributes, ReactNode, useActionState } from "react";

export interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "action"> {
  children: ReactNode;
  action: (prevState: any, formData: FormData) => Promise<any>;
}

const Form = ({ children, action, ...rest }: FormProps) => {
  const [state, dispatch] = useActionState(action, { error: null });

  return (
    <form {...rest} action={dispatch}>
      {state?.error && (
        <p className="bg-red-500 text-white rounded p-2">
          <span className="font-bold text-lg">Error: </span> {state.error}
        </p>
      )}

      {children}
    </form>
  );
};

export default Form;
