"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  signUp,
  SignUpErrors,
  SignUpInput,
  SignUpSchema,
} from "./action/signUp";
import { useMask } from "@react-input/mask";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      accountType: "personal",
    },
  });

  const router = useRouter();

  const { error, mutateAsync, isPending } = useMutation<
    void,
    SignUpErrors,
    SignUpInput
  >({
    mutationKey: ["signUp"],
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Conta criada com sucesso! Faça login.");
      router.push("/auth/login");
    },
    onError: () => {
      toast.error("Error ao criar conta verifique suas credenciais.");
    },
  });

  const accountType = useWatch({ control, name: "accountType" });

  const onSubmit = async (data: SignUpInput) => {
    await mutateAsync(data);
  };

  const cpfMask = "___.___.___-__";
  const cnpjMask = "__.___.___/____-__";
  const currentMask = accountType === "company" ? cnpjMask : cpfMask;

  const documentInputRef = useMask({
    mask: currentMask,
    replacement: { _: /\d/ },
  });

  console.log(error);

  return (
    <main className="max-w-md min-h-[90vh] mx-auto py-20 px-4 animate-fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">
        Criar conta no EventoSnap
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-1">Nome</label>
          <input
            disabled={isPending}
            {...register("name")}
            type="text"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
          {error?.errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.name[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            disabled={isPending}
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          {error?.errors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.email[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Tipo de Conta</label>
          <select
            disabled={isPending}
            {...register("accountType")}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="personal">Pessoa Física</option>
            <option value="company">Pessoa Jurídica</option>
          </select>
          {errors.accountType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.accountType.message}
            </p>
          )}
          {error?.errors?.accountType && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.accountType[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Documento</label>
          <input
            disabled={isPending}
            ref={documentInputRef}
            onChange={(e) => {
              setValue("document", e.target.value);
            }}
            type="text"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.document && (
            <p className="text-red-500 text-sm mt-1">
              {errors.document.message}
            </p>
          )}
          {error?.errors?.document && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.document[0]}
            </p>
          )}
          {error?.errors?.documento && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.documento[0]}
            </p>
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
          {error?.errors?.password && (
            <p className="text-red-500 text-sm mt-1">
              {error?.errors?.password[0]}
            </p>
          )}
        </div>

        {error?.message && (
          <p className="bg-red-500 text-white p-2 rounded">{error.message}</p>
        )}

        <button
          disabled={isPending}
          type="submit"
          className="bg-[#C19B5C] text-white px-6 py-2 rounded w-full hover:opacity-90 transition"
        >
          Criar Conta
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Já tem uma conta?{" "}
        <a href="/auth/login" className="text-[#C19B5C] underline">
          Entrar
        </a>
      </p>
    </main>
  );
}
