import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-eventosnap-off-white text-eventosnap-dark px-4 animate-fade-in text-center">
      <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
      <p className="text-lg mb-6 max-w-md">
        Ops... A página que você está procurando não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="px-6 py-2 rounded bg-eventosnap-gold text-white hover:opacity-90 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
