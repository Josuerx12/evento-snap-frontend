"use client";
import React, { useActionState, useState } from "react";
import { CreateEventAction } from "../actions/create-event.action";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Images, ImagePlus } from "lucide-react";
import Input from "@/components/form/Input";

const CreateEventForm = () => {
  const [state, action, isPending] = useActionState(CreateEventAction, {});
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <form className="flex flex-col gap-6" action={action}>
      {/* Nome do evento */}
      <label>
        <span className="text-sm font-medium text-gray-700 mb-1 block">
          Nome do evento:
        </span>
        <Input
          type="text"
          name="name"
          defaultValue={state?.data?.name}
          disabled={isPending}
        />
        {state?.error?.name && (
          <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
        )}
      </label>

      {/* Descrição */}
      <label>
        <span className="text-sm font-medium text-gray-700 mb-1 block">
          Descrição do evento:
        </span>
        <textarea
          name="description"
          defaultValue={state?.data?.description}
          rows={4}
          disabled={isPending}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {state?.error?.description && (
          <p className="text-red-500 text-sm mt-1">{state.error.description}</p>
        )}
      </label>

      {/* Data do evento */}
      <label>
        <span className="text-sm font-medium text-gray-700 mb-1 block">
          Data do evento:
        </span>
        <Input
          defaultValue={state?.data?.eventDate}
          name="eventDate"
          type="datetime-local"
          disabled={isPending}
        />
        {state?.error?.eventDate && (
          <p className="text-red-500 text-sm mt-1">{state.error.eventDate}</p>
        )}
      </label>

      {/* Upload personalizado */}
      <label htmlFor="logo" className="cursor-pointer group">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition hover:bg-gray-50 group-hover:border-blue-500">
          <ImagePlus className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
          <span className="text-sm text-gray-600 group-hover:text-blue-600">
            Clique para selecionar a logo do evento
          </span>
        </div>
        <Input
          id="logo"
          name="logo"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {/* Preview da imagem */}
      {preview && (
        <div className="w-full max-w-xs">
          <span className="text-sm font-medium text-gray-700">Preview:</span>
          <img
            src={preview}
            alt="Preview da logo"
            className="mt-2 rounded-lg border shadow w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Mensagem de erro geral */}
      {state.message && (
        <p className="bg-red-500 text-white p-2 rounded">{state.message}</p>
      )}

      {/* Botão */}
      <SubmitButton className="w-fit">
        Criar Galeria <Images className="ml-2" />
      </SubmitButton>
    </form>
  );
};

export default CreateEventForm;
