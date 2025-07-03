import React from "react";
import { GetEventByIdAction } from "./actions/get-event-by-id.action";
import BackButton from "@/components/buttons/BackButton";
import Link from "next/link";
import { DeleteEventById } from "./actions/delete-event-by-id.action";

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
            <p>Logo</p>
          </div>
          <p>
            <strong>ID:</strong> {event.id}
          </p>
          <p>
            <strong>Nome:</strong> {event.name}
          </p>
          <p>
            <strong>Dia do evento:</strong> {event.eventDate}
          </p>
          <p>
            <strong>Link para qrCode:</strong> {event.publicToken}
          </p>
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
