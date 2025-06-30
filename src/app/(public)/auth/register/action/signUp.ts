import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import z from "zod";

export const SignUpSchema = z.object({
  name: z.string({ message: "Nome deve ser informado." }),
  email: z.string({ message: "E-mail deve ser informado." }),
  phone: z.string({ message: "Telefone deve ser informado." }),
  accountType: z.enum(["personal", "company"], {
    message: "Tipo da conta deve ser fisica ou juridica.",
  }),
  document: z.string({ message: "Documento deve ser informado." }),
  password: z
    .string({ message: "Senha deve ser informada." })
    .min(6, "Deve conter pelo menos 6 caracteres."),
});

export type SignUpInput = z.infer<typeof SignUpSchema>;

export type SignUpErrors = {
  statusCode?: number;
  message?: string;
  raw?: Partial<SignUpInput>;
  error?: {
    name?: [string];
    email?: [string];
    phone?: [string];
    accountType?: [string];
    document?: [string];
    password?: [string];
  };
};

export async function signUp(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();

    console.log(errorData);
    return {
      error: errorData.error || {},
      statusCode: errorData.statusCode || 500,
      message: errorData.message || "Erro ao realizar cadastro.",
      raw: data,
    } as SignUpErrors;
  }

  toast.success("Cadastro realizado com sucesso!");

  redirect("/auth/login");
}
