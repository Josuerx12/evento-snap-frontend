import Link from "next/link";
import React from "react";

const StatisticsSection = () => {
  return (
    <section className="rounded py-10 px-6 bg-eventosnap-gold">
      <div className="max-w-[80vw] mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold font-serif mb-4">Seu plano</h3>
          <p className="text-lg">
            <strong>Básico</strong> · 200 fotos restantes · válido até{" "}
            <strong>25/12/2025</strong>
          </p>
          <Link
            href="/configuracoes/planos"
            className="inline-block mt-4 text-eventosnap-gold hover:underline text-sm"
          >
            Gerenciar plano
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold font-serif mb-4">
            Atividade recente
          </h3>
          <ul className="text-sm space-y-2">
            <li>📸 Você criou a galeria “Casamento da Ana” há 2 dias</li>
            <li>👤 45 convidados acessaram seu link</li>
            <li>🖼️ 83 fotos foram adicionadas recentemente</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
