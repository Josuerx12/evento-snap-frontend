"use client";
import SubmitButton from "@/components/buttons/SubmitButton";
import { createPlan } from "@/services/plan/create-plan.action";
import { CirclePlus } from "lucide-react";
import React, { useActionState } from "react";

const CreatePlanForm = () => {
  const [state, dispatch, isPending] = useActionState(createPlan, {
    error: null as any,
  });
  return (
    <form
      action={dispatch}
      className="max-w-[80vw] mx-auto bg-eventosnap-beige p-4 rounded mt-6"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Nome do Plano
        </label>
        <input
          disabled={isPending}
          type="text"
          name="name"
          id="name"
          required
          className="w-full p-2 border rounded"
        />

        {state?.error?.name && (
          <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="price">
          Preço (R$)
        </label>
        <input
          step={0.01}
          disabled={isPending}
          type="number"
          name="price"
          id="price"
          required
          className="w-full p-2 border rounded"
        />

        {state?.error?.price && (
          <p className="text-red-500 text-sm mt-1">{state.error.price}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="events">
          Eventos
        </label>
        <input
          disabled={isPending}
          type="number"
          name="events"
          id="events"
          required
          className="w-full p-2 border rounded"
        />

        {state?.error?.events && (
          <p className="text-red-500 text-sm mt-1">{state.error.events}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="photoLimit">
          Limite de Fotos
        </label>
        <input
          disabled={isPending}
          type="number"
          name="photoLimit"
          id="photoLimit"
          required
          className="w-full p-2 border rounded"
        />

        {state?.error?.photoLimit && (
          <p className="text-red-500 text-sm mt-1">{state.error.photoLimit}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-medium mb-2"
          htmlFor="storageLimitMb"
        >
          Limite de Armazenamento (MB)
        </label>
        <input
          disabled={isPending}
          type="number"
          name="storageLimitMb"
          id="storageLimitMb"
          required
          className="w-full p-2 border rounded"
        />
        {state?.error?.storageLimitMb && (
          <p className="text-red-500 text-sm mt-1">
            {state.error.storageLimitMb}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="duration">
          Duração (dias)
        </label>
        <input
          disabled={isPending}
          type="number"
          name="duration"
          id="duration"
          required
          className="w-full p-2 border rounded"
        />
        {state?.error?.duration && (
          <p className="text-red-500 text-sm mt-1">{state.error.duration}</p>
        )}
      </div>

      <SubmitButton
        title="Criar novo plano"
        icon={<CirclePlus className="w-6 h-6" />}
      >
        Criar
      </SubmitButton>
    </form>
  );
};

export default CreatePlanForm;
