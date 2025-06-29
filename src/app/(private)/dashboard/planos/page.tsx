import React from "react";

const PlansPage = () => {
  return (
    <main className="w-full max-w-screen p-4">
      <h1 className="mb-4 text-2xl">Planos</h1>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plano Básico</td>
            <td>R$ 29,90/mês</td>
            <td>Acesso a recursos básicos.</td>
          </tr>
          <tr>
            <td>Plano Pro</td>
            <td>R$ 49,90/mês</td>
            <td>Acesso a recursos avançados.</td>
          </tr>
          <tr>
            <td>Plano Premium</td>
            <td>R$ 99,90/mês</td>
            <td>Acesso a todos os recursos e suporte prioritário.</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default PlansPage;
