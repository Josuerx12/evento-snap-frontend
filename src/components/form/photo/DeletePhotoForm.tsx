"use client";
import { PhotoOutput } from "@/types/photo.type";
import React, { useActionState, useEffect } from "react";
import { DeletePhotoAction } from "./action/delete-photo.action";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const DeletePhotoForm = ({ photo }: { photo: PhotoOutput }) => {
  const [state, action] = useActionState(DeletePhotoAction, {});

  useEffect(() => {
    if (state.successMsg) {
      toast.success(state.successMsg);
    }
  }, [state]);
  return (
    <form action={action} className="absolute z-10">
      <input type="hidden" name="id" value={photo.id} />
      <button
        title="Deletar foto."
        className="-translate-y-4 cursor-pointer -translate-x-4 bg-red-600 text-white hover:bg-red-500 duration-150 ease-in-out rounded-full p-1.5"
      >
        <X className="w-4 h-4" />
      </button>
    </form>
  );
};

export default DeletePhotoForm;
