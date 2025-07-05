import React from "react";
import { GetEventWithoutAuth } from "../../actions/get-event-without-auth.action";
import SendPhotoForm from "./Form/SendPhotoForm";

const EventoPage = async ({ params }: { params: any }) => {
  const { id, eventToken } = await params;

  const event = await GetEventWithoutAuth(id, eventToken);

  return (
    <main className="min-h-screen w-full bg-eventosnap-off-white py-10 px-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="bg-eventosnap-dark text-eventosnap-off-white px-8 py-6">
          {event.logo && (
            <img
              src={event.logo}
              alt="Logo do evento"
              className="object-contain h-20 mb-4"
            />
          )}
          <h1 className="text-2xl font-bold mb-2 text-eventosnap-off-white!">
            {event.name}
          </h1>
          <p className="text-sm">
            <span className="font-semibold">Data:</span>{" "}
            {new Date(event.eventDate).toLocaleString("pt-BR")}
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Deixe sua mensagem e envie uma foto 📸
          </h2>

          <SendPhotoForm eventToken={eventToken} id={id} />
        </div>
      </div>
    </main>
  );
};

export default EventoPage;
