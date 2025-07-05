import React from "react";
import { GetEventWithoutAuth } from "../../actions/get-event-without-auth.action";
import Image from "next/image";

const EventoPage = async ({
  params,
}: {
  params: { id: string; eventToken: string };
}) => {
  const param = await params;

  const { id, eventToken } = param;

  const event = await GetEventWithoutAuth(id, eventToken);

  return (
    <main className="min-h-screen w-full p-6 bg-eventosnap-off-white text-eventosnap-dark">
      <div className="max-w-[90dvw] md:max-w-[70dvw] mx-auto bg-eventosnap-gold rounded p-3">
        {event.logo && (
          <Image
            src={event.logo}
            width={600}
            height={600}
            alt="Logo do evento"
            className="object-cover"
          />
        )}
        <p>
          <span className="capitalize font-semibold">Nome do evento: </span>{" "}
          {event.name}
        </p>
        <p>
          <span className="capitalize font-semibold">
            Dia e hora do evento:{" "}
          </span>{" "}
          {new Date(event.eventDate).toLocaleString("pt-BR")}
        </p>
      </div>
    </main>
  );
};

export default EventoPage;
