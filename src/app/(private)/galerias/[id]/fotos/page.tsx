import BackButton from "@/components/buttons/BackButton";
import { PagitationOutput } from "@/interfaces/contracts/pagination";
import { PhotoOutput } from "@/types/photo.type";
import { cookies } from "next/headers";
import React from "react";
import { Download } from "lucide-react";
import PaginationControls from "@/components/PaginationControls";

const ITEMS_PER_PAGE = 15;

const EventPhotosPage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams?: any;
}) => {
  const { id } = await params;
  const page = Number((await searchParams?.page) || 1);

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}/photos?page=${page}&perPage=${ITEMS_PER_PAGE}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const photos = (await res.json()) as PagitationOutput<PhotoOutput>;

  return (
    <main className="p-6 space-y-8">
      <BackButton />
      <h1 className="text-3xl font-playfair text-eventosnap-dark">
        Galeria de Fotos
      </h1>
      {photos.items?.length === 0 ? (
        <p className="text-gray-600">Nenhuma foto enviada ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.items.map((p) => (
            <div
              key={p.id}
              className="bg-eventosnap-cream border border-eventosnap-gold rounded-xl shadow-lg p-2 flex flex-col items-center group hover:shadow-xl transition"
            >
              <div className="relative w-full h-[250px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={p.url}
                  alt={`Foto ${p.id}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <a
                href={p.url}
                download
                className="mt-3 inline-flex items-center text-sm text-eventosnap-dark hover:text-eventosnap-gold transition"
              >
                <Download className="w-4 h-4 mr-1" />
                Baixar imagem
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Paginação */}
      {photos.totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <PaginationControls
            currentPage={page}
            totalPages={photos.totalPages}
            basePath={`/eventos/${id}/galeria`}
          />
        </div>
      )}
    </main>
  );
};

export default EventPhotosPage;
