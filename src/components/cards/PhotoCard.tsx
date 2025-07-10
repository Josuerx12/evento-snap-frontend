"use client";
import { PhotoOutput } from "@/types/photo.type";
import { Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import DeletePhotoForm from "../form/photo/DeletePhotoForm";

const PhotoCard = ({ p }: { p: PhotoOutput }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = messageRef.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "0");
      const maxHeight = lineHeight * 3;
      setShowToggle(el.scrollHeight > maxHeight);
    }
  }, [p.message]);

  return (
    <div
      key={p.id}
      className="bg-eventosnap-cream border min-h-[400px] max-w-xs border-eventosnap-gold rounded-xl shadow-lg p-2 flex flex-col group hover:shadow-xl transition"
    >
      <DeletePhotoForm photo={p} />
      <div className="relative w-full h-[250px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={p.url}
          alt={`Foto ${p.id}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <p
        ref={messageRef}
        className={`text-start my-2 transition-all duration-300 ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {p.message}
      </p>

      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs cursor-pointer text-blue-600 hover:underline text-left w-fit mb-2"
        >
          {expanded ? "Ver menos" : "Ver mais"}
        </button>
      )}

      <a
        href={p.url}
        download
        className="mt-auto inline-flex justify-center items-center text-sm text-eventosnap-dark hover:text-eventosnap-gold transition"
      >
        <Download className="w-4 h-4 mr-1" />
        Baixar imagem
      </a>
    </div>
  );
};

export default PhotoCard;
