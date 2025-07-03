import React from "react";
import { GetUserEventsAction } from "../actions/get-user-events.action";
import Link from "next/link";
import EventTable from "./components/table/EventTable";
import { Plus } from "lucide-react";

const EventsSection = async () => {
  const events = await GetUserEventsAction({});
  return (
    <section className="mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-center my-3 text-eventosnap-dark">
          Suas Galerias
        </h2>

        <div>
          <Link
            className="flex items-center gap-2 bg-eventosnap-dark hover:bg-eventosnap-dark/80 duration-150 ease-linear text-eventosnap-off-white w-fit px-3 py-1 rounded-md"
            href={"/galerias/criar"}
          >
            Novo <Plus size={16} />
          </Link>
        </div>
      </div>

      {events.totalItems <= 0 && (
        <p>
          Nenhuma galeria adicionada.{" "}
          <Link href={"/galerias/criar"} className="text-blue-600">
            Clique aqui
          </Link>{" "}
          para criar uma nova galeria.
        </p>
      )}

      {events.items.length > 0 && <EventTable events={events.items} />}
    </section>
  );
};

export default EventsSection;
