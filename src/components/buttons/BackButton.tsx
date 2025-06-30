"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center mb-4 cursor-pointer gap-2 text-gray-600 hover:text-gray-800 transition"
    >
      <ChevronLeft />
      Voltar
    </button>
  );
};

export default BackButton;
