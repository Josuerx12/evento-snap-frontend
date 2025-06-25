import { api } from "@/services/api.service";
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
  statusCode: number;
  message: string;
  errors: {
    name?: [string];
    documento?: [string];
    email?: [string];
    phone?: [string];
    accountType?: [string];
    document?: [string];
    password?: [string];
  };
};

export async function signUp(data: SignUpInput) {
  try {
    await api.post("/user", data);
  } catch (error: any) {
    if (error.response.data) {
      console.log(error.response.data);
      throw error.response.data;
    }

    console.log(error);
    throw error;
  }
}
