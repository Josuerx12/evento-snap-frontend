"use client";

import { useActionState } from "react";
import { signIn } from "./action/signIn";
import SubmitButton from "@/components/buttons/SubmitButton";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  const [state, dispatch, isPending] = useActionState(signIn, {});

  return (
    <main className="max-w-md min-h-[90vh] mx-auto py-20 px-4 animate-fade-in ">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">
        Entrar no EventoSnap
      </h1>
      <form action={dispatch} className="space-y-6">
        <div>
          <label className="block mb-1">Login</label>
          <input
            name="login"
            disabled={isPending}
            type="login"
            className="w-full px-4 py-2 border rounded"
          />
          {state?.error?.login && (
            <p className="text-red-500 text-sm mt-1">{state?.error?.login}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Senha</label>
          <input
            name="password"
            disabled={isPending}
            type="password"
            className="w-full px-4 py-2 border rounded"
          />
          {state?.error?.password && (
            <p className="text-red-500 text-sm mt-1">
              {state?.error?.password}
            </p>
          )}
        </div>

        {state?.message && (
          <p className="p-2 bg-red-600 text-white rounded">{state?.message}</p>
        )}

        <SubmitButton className="w-full! justify-center!">Entrar</SubmitButton>
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
