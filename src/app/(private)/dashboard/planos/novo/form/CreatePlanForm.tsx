"use client";
import SubmitButton from "@/components/buttons/SubmitButton";
import Input from "@/components/form/Input";
import { createPlan } from "@/services/plan/create-plan.action";
import { CirclePlus } from "lucide-react";
import React, { useActionState } from "react";

const CreatePlanForm = () => {
  const [state, dispatch, isPending] = useActionState(createPlan, {
    error: null as any,
  });
  return (
    <form action={dispatch} className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Nome do Plano
        </label>
        <Input disabled={isPending} type="text" name="name" id="name" />

        {state?.error?.name && (
          <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="price">
          Preço (R$)
        </label>
        <Input
          step={0.01}
          disabled={isPending}
          type="number"
          name="price"
          id="price"
        />

        {state?.error?.price && (
          <p className="text-red-500 text-sm mt-1">{state.error.price}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="events">
          Eventos
        </label>
        <Input disabled={isPending} type="number" name="events" id="events" />

        {state?.error?.events && (
          <p className="text-red-500 text-sm mt-1">{state.error.events}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="photoLimit">
          Limite de Fotos
        </label>
        <Input
          disabled={isPending}
          type="number"
          name="photoLimit"
          id="photoLimit"
        />

        {state?.error?.photoLimit && (
          <p className="text-red-500 text-sm mt-1">{state.error.photoLimit}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="storageLimitMb">
          Limite de Armazenamento (MB)
        </label>
        <Input
          disabled={isPending}
          type="number"
          name="storageLimitMb"
          id="storageLimitMb"
        />
        {state?.error?.storageLimitMb && (
          <p className="text-red-500 text-sm mt-1">
            {state.error.storageLimitMb}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="duration">
          Duração (dias)
        </label>
        <Input
          disabled={isPending}
          type="number"
          name="duration"
          id="duration"
        />
        {state?.error?.duration && (
          <p className="text-red-500 text-sm mt-1">{state.error.duration}</p>
        )}
      </div>

      <SubmitButton
        className="w-fit!"
        title="Criar novo plano"
        icon={<CirclePlus className="w-6 h-6" />}
      >
        Criar
      </SubmitButton>
    </form>
  );
};

export default CreatePlanForm;
