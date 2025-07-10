import React from "react";
import { GetEventByIdAction } from "./actions/get-event-by-id.action";
import BackButton from "@/components/buttons/BackButton";
import Link from "next/link";
import { DeleteEventById } from "./actions/delete-event-by-id.action";
import QRCodeModal from "@/components/modals/QrCodeModal";

const EventPage = async ({ params }: { params: any }) => {
  const param = await params;

  const id = await param.id;

  const event = await GetEventByIdAction(id);

  return (
    <main className=" w-full min-h-screen mx-auto p-6">
      <BackButton />
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Geleria: {event.name}</h1>

          <div className="flex gap-2">
            <Link
              href={`/galerias/${event.id}/editar`}
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Editar
            </Link>

            <form action={DeleteEventById}>
              <input type="hidden" name="id" value={event.id} />
              <button
                type="submit"
                title="Deletar galeria"
                className="px-4 py-2 text-sm rounded-md cursor-pointer bg-red-600 text-white hover:bg-red-700 transition"
              >
                Deletar
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <div>
            {event.logo && (
              <img
                src={event.logo}
                width={200}
                height={200}
                alt="Logo do evento."
              />
            )}
          </div>
          <p>
            <strong>ID:</strong> {event.id}
          </p>
          <p>
            <strong>Nome:</strong> {event.name}
          </p>
          <p>
            <strong>Dia do evento:</strong>{" "}
            {new Date(event.eventDate).toLocaleString("pt-BR")}
          </p>
          <p>
            <strong>Link do Evento: </strong>
            <Link
              className="text-blue-600 hover:text-blue-500"
              target="_blank"
              href={"/evento/" + event.id + "/" + event.publicToken}
            >
              Clique Aqui.
            </Link>
          </p>
          <div>
            <strong>QR Code: </strong>{" "}
            <QRCodeModal
              event={event}
              url={`${process.env.NEXT_PUBLIC_APP_URL}/evento/${event.id}/${event.publicToken}`}
            />
          </div>
          <p>
            <strong>Galeria:</strong>{" "}
            <Link
              className="text-blue-600 hover:text-blue-500"
              href={"/galerias/" + event.id + "/fotos"}
            >
              Acessar Galeria.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default EventPage;
