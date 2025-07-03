"use client";
import React, { useActionState } from "react";
import { CreateEventAction } from "../actions/create-event.action";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Images } from "lucide-react";

const CreateEventForm = () => {
  const [state, action, isPending] = useActionState(CreateEventAction, {});

  return (
    <form className="flex flex-col gap-4" action={action}>
      <label>
        <span className="text-sm font-medium mb-2">Nome do evento: </span>
        <input
          type="text"
          name="name"
          disabled={isPending}
          required
          className="w-full p-2 border rounded"
        />
        {state?.error?.name && (
          <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
        )}
      </label>

      <label>
        <span className="text-sm font-medium mb-2">Descrição do evento: </span>
        <textarea
          name="description"
          rows={4}
          disabled={isPending}
          required
          className="w-full p-2 border rounded"
        />
        {state?.error?.description && (
          <p className="text-red-500 text-sm mt-1">{state.error.description}</p>
        )}
      </label>

      <label>
        <span className="text-sm font-medium mb-2">Data do evento: </span>
        <input
          name="eventDate"
          type="datetime-local"
          disabled={isPending}
          required
          className="w-full p-2 border rounded"
        />
        {state?.error?.eventDate && (
          <p className="text-red-500 text-sm mt-1">{state.error.eventDate}</p>
        )}
      </label>

      {state.message && (
        <p className="bg-red-500 text-white p-2 rounded">{state.message}</p>
      )}

      <SubmitButton className="w-fit">
        Criar Galeria <Images />
      </SubmitButton>
    </form>
  );
};

export default CreateEventForm;
