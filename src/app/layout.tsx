import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import MenuContext from "@/context/MenuContext";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["800", "700", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EventoSnap – Capture Momentos Inesquecíveis",
  description:
    "Compartilhe fotos de eventos e casamentos com seus convidados de forma elegante e prática.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ReactQueryProvider>
          <MenuContext>
            <Navbar />
            {children}
            <Footer />
          </MenuContext>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
