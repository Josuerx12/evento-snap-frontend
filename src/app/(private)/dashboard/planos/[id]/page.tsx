import { deletePlan } from "@/services/plan/delete-plan.action";
import { getPlanById } from "@/services/plan/get-plan-by-id";
import Link from "next/link";
import React from "react";

const PlanPage = async ({ params }: { params: any }) => {
  const param = await params;
  const planId = param.id;

  if (!planId) {
    return <div className="p-4 text-red-500">Plano não encontrado.</div>;
  }

  const plan = await getPlanById(planId);

  return (
    <main className=" w-full mx-auto p-6">
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Plano: {plan.name}</h1>

          <div className="flex gap-2">
            <Link
              href={`${plan.id}/editar`}
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Editar
            </Link>

            <form action={deletePlan}>
              <input type="hidden" name="id" value={plan.id} />
              <button
                type="submit"
                title="Deletar plano"
                className="px-4 py-2 text-sm rounded-md cursor-pointer bg-red-600 text-white hover:bg-red-700 transition"
              >
                Deletar
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>ID:</strong> {plan.id}
          </p>
          <p>
            <strong>Preço:</strong>{" "}
            {plan.price?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>
            <strong>Eventos:</strong> {plan.events}
          </p>
          <p>
            <strong>Armazenamento:</strong> {plan.storageLimitMb} MB
          </p>
          <p>
            <strong>Fotos:</strong> {plan.photoLimit}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PlanPage;
