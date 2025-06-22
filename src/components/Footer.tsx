import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-eventosnap-dark text-eventosnap-cream py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} EventoSnap. Todos os direitos
          reservados.
        </p>
        <nav className="flex gap-4">
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </footer>
  );
}
