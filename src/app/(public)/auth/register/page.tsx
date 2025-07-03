"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { signUp, SignUpInput, SignUpSchema } from "./action/signUp";
import { useMask } from "@react-input/mask";
import { useActionState } from "react";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  const [state, dispatch, isPending] = useActionState(signUp, { error: {} });

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      accountType: "personal",
      document: state.raw?.document || "",
      email: state.raw?.email || "",
      name: state.raw?.name || "",
      phone: state.raw?.phone || "",
      password: state.raw?.password || "",
    },
  });

  const accountType = useWatch({ control, name: "accountType" });

  const cpfMask = "___.___.___-__";
  const cnpjMask = "__.___.___/____-__";
  const currentMask = accountType === "company" ? cnpjMask : cpfMask;

  const documentInputRef = useMask({
    mask: currentMask,
    replacement: { _: /\d/ },
  });

  const phoneInputRef = useMask({
    mask: "55 (__) _____-____",
    replacement: { _: /\d/ },
  });

  return (
    <main className="max-w-md min-h-[90vh] mx-auto py-20 px-4 animate-fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">
        Criar conta no EventoSnap
      </h1>
      <form action={dispatch} className="space-y-6">
        <div>
          <label className="block mb-1">Nome</label>
          <input
            {...register("name")}
            disabled={isPending}
            type="text"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
          {state?.error?.name && (
            <p className="text-red-500 text-sm mt-1">{state?.error?.name[0]}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            {...register("email")}
            disabled={isPending}
            type="email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          {state?.error?.email && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.email[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Telefone de contato</label>
          <input
            disabled={isPending}
            {...register("phone")}
            ref={phoneInputRef}
            onChange={(e) => {
              setValue("phone", e.target.value);
            }}
            type="tel"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
          {state?.error?.phone && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.phone[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Tipo de Conta</label>
          <select
            {...register("accountType")}
            disabled={isPending}
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
          {state?.error?.accountType && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.accountType[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Documento</label>
          <input
            {...register("document")}
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
          {state?.error?.document && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.document[0]}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1">Senha</label>
          <input
            {...register("password")}
            disabled={isPending}
            type="password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          {state?.error?.password && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.password[0]}
            </p>
          )}
        </div>

        {state?.message && (
          <p className="bg-red-500 text-white p-2 rounded">{state.message}</p>
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
