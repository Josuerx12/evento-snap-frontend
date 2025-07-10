import BackButton from "@/components/buttons/BackButton";
import { PagitationOutput } from "@/interfaces/contracts/pagination";
import { PhotoOutput } from "@/types/photo.type";
import { cookies } from "next/headers";
import React from "react";
import PaginationControls from "@/components/PaginationControls";
import PhotoCard from "@/components/cards/PhotoCard";

const ITEMS_PER_PAGE = 15;

const EventPhotosPage = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams?: any;
}) => {
  const { id } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page || 1);

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}/photos?page=${currentPage}&perPage=${ITEMS_PER_PAGE}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: {
        tags: ["photos"],
      },
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
        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-5 gap-6">
          {photos.items.map((p) => (
            <div key={p.id} className="break-inside-avoid mb-4">
              <PhotoCard p={p} />
            </div>
          ))}
        </div>
      )}

      {/* Paginação */}
      {photos.totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <PaginationControls
            currentPage={currentPage}
            totalPages={photos.totalPages}
            basePath={`/galerias/${id}/fotos`}
          />
        </div>
      )}
    </main>
  );
};

export default EventPhotosPage;
