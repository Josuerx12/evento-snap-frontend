import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className="bg-eventosnap-off-white text-[#2E2F32] animate-fade-in">
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-serif font-bold mb-6 animate-slide-up">
          Capture momentos inesquecíveis com o EventoSnap
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
          Sua galeria colaborativa de fotos para casamentos e eventos. Receba
          imagens diretamente dos seus convidados via link ou QR Code.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#planos"
            className="bg-[#2E2F32] text-white px-6 py-3 rounded text-lg hover:opacity-90 transition"
          >
            Ver Planos
          </Link>
          <Link
            href="/auth/login"
            className="border border-[#C19B5C] text-[#C19B5C] px-6 py-3 rounded text-lg hover:bg-[#C19B5C] hover:text-white transition"
          >
            Criar Conta / Login
          </Link>
        </div>
      </section>

      <section id="planos" className="bg-[#F9F5EF] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center animate-slide-up">
            Escolha seu plano
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                nome: "Grátis",
                preco: "R$ 0",
                fotos: "30 fotos",
                duracao: "30 dias",
                beneficios: [
                  "QR Code único",
                  "Galeria básica com marca d’água",
                ],
              },
              {
                nome: "Básico",
                preco: "R$ 29",
                fotos: "200 fotos",
                duracao: "3 meses",
                beneficios: ["Galeria personalizada", "Download em zip"],
              },
              {
                nome: "Essencial",
                preco: "R$ 59",
                fotos: "500 fotos",
                duracao: "6 meses",
                beneficios: ["QR personalizado", "Capa de galeria customizada"],
              },
              {
                nome: "Premium",
                preco: "R$ 99",
                fotos: "1500 fotos",
                duracao: "12 meses",
                beneficios: ["Subdomínio próprio", "Mural de mensagens"],
              },
              {
                nome: "Ilimitado",
                preco: "R$ 199+",
                fotos: "Ilimitado*",
                duracao: "24 meses",
                beneficios: ["100 GB de armazenamento", "Suporte VIP"],
              },
            ].map((plano, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#C19B5C] bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in"
              >
                <h3 className="text-2xl font-serif font-bold mb-2 text-[#2E2F32]">
                  {plano.nome}
                </h3>
                <p className="text-lg mb-1">{plano.fotos}</p>
                <p className="text-lg mb-4">{plano.duracao}</p>
                <ul className="mb-4 text-sm list-disc list-inside space-y-1">
                  {plano.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-[#C19B5C] mb-4">
                  {plano.preco}
                </p>
                <Link
                  href="/login"
                  className="block text-center bg-[#C19B5C] text-white py-2 rounded hover:opacity-90 transition"
                >
                  Começar com este plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
