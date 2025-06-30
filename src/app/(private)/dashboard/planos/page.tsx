import TableRow from "@/components/tables/TableRow";
import { getPlans } from "@/services/plan/get-plans";
import Link from "next/link";
import React from "react";

const PlansPage = async ({ searchParams }: { searchParams: any }) => {
  const params = await searchParams;

  const plans = await getPlans({
    filter: params.filter || {},
    page: params.page || "1",
    perPage: params.perPage || "15",
  });

  if (!plans || !plans.items || plans.items.length === 0) {
    return (
      <div className="p-4">
        <h1 className="mb-4 text-2xl">Planos</h1>
        <p className="text-gray-500">Nenhum plano encontrado.</p>
        <p className="text-gray-500">Você pode criar um novo plano.</p>
        <Link
          href="planos/novo"
          className="inline-block px-4 py-2 mt-4 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Criar Novo Plano
        </Link>
      </div>
    );
  }
  return (
    <main className="w-full max-w-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Planos</h1>
        <div>
          <Link
            href="planos/novo"
            className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Criar Novo Plano
          </Link>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Eventos</th>
            <th>Armazenamento</th>
            <th>Fotos</th>
          </tr>
        </thead>
        <tbody>
          {plans.items.map((plan) => (
            <TableRow
              href={"planos/" + plan.id}
              title={"Ver detalhes do plano " + plan.name}
              key={plan.id}
            >
              <td>{plan.name}</td>
              <td>
                {plan.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{plan.events}</td>
              <td>{plan.storageLimitMb}</td>
              <td>{plan.photoLimit}</td>
            </TableRow>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default PlansPage;
