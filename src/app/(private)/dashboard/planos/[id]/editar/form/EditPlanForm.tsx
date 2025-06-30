"use client";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Plan } from "@/interfaces/plan.type";
import { updatePlan } from "@/services/plan/update-plan";
import { Save } from "lucide-react";
import React, { useActionState } from "react";

const EditPlanForm = ({ plan }: { plan: Plan }) => {
  const [state, dispatch, isPending] = useActionState(updatePlan, {
    error: null as any,
  });

  return (
    <form
      action={dispatch}
      className="bg-eventosnap-beige p-3 rounded-md shadow-md mt-6 max-w-[80vw] mx-auto"
    >
      <input type="hidden" name="id" value={plan.id} />

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Nome do Plano
        </label>
        <input
          disabled={isPending}
          type="text"
          name="name"
          id="name"
          defaultValue={plan.name}
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
          disabled={isPending}
          type="number"
          name="price"
          step={0.01}
          id="price"
          defaultValue={plan.price}
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
          defaultValue={plan.events}
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
          defaultValue={plan.photoLimit}
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
          defaultValue={plan.storageLimitMb}
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
          defaultValue={plan.duration}
          required
          className="w-full p-2 border rounded"
        />

        {state?.error?.duration && (
          <p className="text-red-500 text-sm mt-1">{state.error.duration}</p>
        )}
      </div>

      <SubmitButton
        title="Salvar alterações"
        icon={<Save className="w-6 h-6" />}
      >
        Salvar
      </SubmitButton>
    </form>
  );
};

export default EditPlanForm;
