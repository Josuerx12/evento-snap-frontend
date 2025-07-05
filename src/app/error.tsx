"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error("Erro capturado:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-eventosnap-off-white text-eventosnap-dark px-4 animate-fade-in">
      <h1 className="text-4xl font-serif font-bold mb-4">Algo deu errado!</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Ocorreu um erro inesperado. Você pode tentar novamente ou voltar para a
        página inicial.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded bg-eventosnap-gold text-white hover:opacity-90 transition"
        >
          Tentar novamente
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded border border-eventosnap-gold text-eventosnap-gold hover:bg-eventosnap-gold hover:text-white transition"
        >
          Voltar para início
        </button>
      </div>
    </div>
  );
}
