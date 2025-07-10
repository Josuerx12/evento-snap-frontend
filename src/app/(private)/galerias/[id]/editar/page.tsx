import BackButton from "@/components/buttons/BackButton";
import React from "react";
import { GetEventByIdAction } from "../actions/get-event-by-id.action";
import EditEventForm from "./forms/EditEventForm";

const EditEventPage = async ({ params }: { params: any }) => {
  const param = await params;

  const event = await GetEventByIdAction(param.id);

  return (
    <main className="w-full min-h-screen mx-auto p-6">
      <BackButton />
      <h3 className="text-3xl text-center">Editar Galeria - {event.name}</h3>

      <EditEventForm event={event} />
    </main>
  );
};

export default EditEventPage;
