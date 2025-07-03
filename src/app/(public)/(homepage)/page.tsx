import HomePageSekeleton from "@/components/skeletons/HomePageSekeleton";
import { getUser } from "@/services/auth.service";
import { getPlans } from "@/services/plan/get-plans";
import Link from "next/link";
import React, { Suspense } from "react";

const HomePage = async () => {
  const user = await getUser();

  const plans = await getPlans({});

  return (
    <Suspense fallback={<HomePageSekeleton />}>
      <main className="bg-eventosnap-off-white min-h-screen text-eventosnap-dark animate-fade-in">
        {!user && (
          <>
            {/* Hero deslogado */}
            <section className="text-center py-24 px-6 bg-[url('/evento-snap-hero-1.png')] bg-cover bg-center bg-no-repeat text-white shadow-inner">
              <div className="bg-black/60 backdrop-blur-sm p-8 rounded-xl inline-block animate-slide-up">
                <h1 className="text-5xl text-eventosnap-beige! font-serif font-bold mb-6 drop-shadow">
                  Sua história contada em fotos
                </h1>
                <p className="text-xl max-w-2xl mx-auto mb-10">
                  O EventoSnap transforma qualquer evento em uma galeria
                  interativa. Receba fotos de todos os convidados, sem
                  complicação.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="#planos"
                    className="bg-eventosnap-gold text-white px-6 py-3 rounded text-lg hover:opacity-90 transition"
                  >
                    Ver Planos
                  </Link>

                  <Link
                    href="/auth/login"
                    className="border border-white text-white px-6 py-3 rounded text-lg hover:bg-white hover:text-eventosnap-dark transition"
                  >
                    Criar Conta / Login
                  </Link>
                </div>
              </div>
            </section>

            {/* Planos */}
            <section id="planos" className="py-20 px-6 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-12 text-center animate-slide-up">
                  Escolha seu plano
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {plans?.items?.map((plano, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-eventosnap-gold bg-eventosnap-off-white p-6 shadow-lg hover:shadow-2xl transition duration-300 animate-fade-in"
                    >
                      <h3 className="text-2xl font-serif font-bold mb-2 text-eventosnap-dark">
                        {plano.name}
                      </h3>
                      <p className="text-lg mb-1">
                        <span>Limite de eventos: </span>
                        {plano.events}
                      </p>
                      <p className="text-lg mb-1">
                        <span>Limite de fotos: </span>
                        {plano.photoLimit}
                      </p>
                      <p className="text-lg mb-1">
                        <span>Armazenamento maximo: </span>
                        {plano.storageLimitMb / 1000 < 1
                          ? `${plano.storageLimitMb} MB's`
                          : `${plano.storageLimitMb / 1000} GB's`}
                      </p>
                      <p className="text-lg mb-4">
                        <span>Tempo de duração: </span>
                        {plano.duration} Dias
                      </p>

                      <p className="text-2xl font-bold text-eventosnap-gold mb-4">
                        {plano.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <Link
                        href={"/auth/register?=plan=" + plano.id}
                        className="block text-center bg-eventosnap-gold text-white py-2 rounded hover:opacity-90 transition"
                      >
                        Começar com este plano
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {user && (
          <>
            {/* Hero logado */}
            <section className="text-center bg-[url('/evento-snap-hero-2.jpg')] bg-cover bg-center bg-no-repeat  bg-eventosnap-dark text-white">
              <div className="bg-black/40 backdrop-blur-sm w-full py-30 px-10 h-full rounded-xl inline-block animate-slide-up">
                <h2 className="text-4xl text-eventosnap-cream! font-serif font-bold mb-4 animate-slide-up">
                  Bem-vindo de volta, {user.name.split(" ")[0]}!
                </h2>
                <p className="text-lg mb-6 text-eventosnap-cream">
                  Continue onde parou. Suas memórias estão a apenas um clique.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/galerias/estatisticas"
                    className="bg-white text-eventosnap-dark px-6 py-3 rounded text-lg hover:opacity-90 transition"
                  >
                    Ver Minhas Galerias
                  </Link>
                  <Link
                    href="/galerias/nova"
                    className="border border-white text-white px-6 py-3 rounded text-lg hover:bg-white hover:text-eventosnap-dark transition"
                  >
                    Criar Nova Galeria
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </Suspense>
  );
};

export default HomePage;
