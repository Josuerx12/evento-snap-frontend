"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import SubmitButton from "@/components/buttons/SubmitButton";
import { SendPhotoToEventAction } from "./action/send-event-photo.action";
import { toast } from "react-toastify";

const SendPhotoForm = ({
  eventToken,
  id,
}: {
  id: string;
  eventToken: string;
}) => {
  const [state, formAction, isPending] = useActionState(
    SendPhotoToEventAction,
    {}
  );

  const [previews, setPreviews] = useState<string[]>([]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const newPreviews = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleRemovePhoto = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (state.successMsg) {
      toast.success(state.successMsg);
      formRef.current?.reset();
      setPreviews([]);
    }

    if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="eventToken" value={eventToken} />
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Sua mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Escreva sua mensagem aqui..."
        />

        {state.error?.message && (
          <p className="text-red-500 text-sm mt-1">{state.error.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="photos" className="cursor-pointer group">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center gap-2 transition hover:bg-gray-50 group-hover:border-blue-500">
            <ImagePlus className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
            <span className="text-sm text-gray-600 group-hover:text-blue-600">
              Clique ou toque para selecionar ou tirar fotos
            </span>
          </div>
          <input
            id="photos"
            disabled={isPending}
            name="photos"
            type="file"
            accept="image/*"
            multiple
            capture="environment"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </label>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative  border rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={`Preview ${index}`}
                className="object-fill w-full "
              />
              <button
                type="button"
                disabled={isPending}
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-1 right-1 bg-white text-red-600 rounded-full p-1 shadow hover:bg-gray-100"
                aria-label="Remover imagem"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {state.message && (
        <p className="bg-red-500 text-white p-2 rounded">{state.message}</p>
      )}

      <div className="flex justify-end">
        <SubmitButton>Enviar</SubmitButton>
      </div>
    </form>
  );
};

export default SendPhotoForm;
