"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "./action/signIn";

const schema = z.object({
  login: z.string({ message: "Login deve ser informado." }),
  password: z
    .string({ message: "Senha deve ser informada." })
    .min(6, "Mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const { isPending, error, mutateAsync } = useMutation({
    mutationFn: signIn,
    mutationKey: ["signIn"],
    onError: () => {
      toast.error("Error ao fazer login.");
    },
    onSuccess: () => {
      toast.success("Login efetuado com sucesso!");
      router.push("/dashboard");
    },
  });

  const onSubmit = async (data: FormData) => {
    await mutateAsync(data);
  };

  return (
    <main className="max-w-md mx-auto py-20 px-4 animate-fade-in ">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">
        Entrar no EventoSnap
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-1">Login</label>
          <input
            disabled={isPending}
            {...register("login")}
            type="login"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.login && (
            <p className="text-red-500 text-sm mt-1">{errors.login.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Senha</label>
          <input
            disabled={isPending}
            {...register("password")}
            type="password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {error && (
          <p className="p-2 bg-red-600 text-white rounded">{error.message}</p>
        )}

        <button
          disabled={isPending}
          type="submit"
          className="bg-[#C19B5C] text-white px-6 py-2 rounded w-full hover:opacity-90 transition"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Não tem conta?{" "}
        <a href="/auth/register" className="text-[#C19B5C] underline">
          Cadastre-se
        </a>
      </p>
    </main>
  );
}
