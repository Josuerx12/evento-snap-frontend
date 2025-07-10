"use client";

import { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { X } from "lucide-react";
import clsx from "clsx";
import { EventOutput } from "@/types/event.type";

export default function QRCodeModal({
  url,
  event,
}: {
  url: string;
  event: EventOutput;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const [qrSize, setQrSize] = useState(300);

  useEffect(() => {
    const updateQrSize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setQrSize(200);
      } else if (width < 768) {
        setQrSize(250);
      } else {
        setQrSize(400);
      }
    };

    updateQrSize();
    window.addEventListener("resize", updateQrSize);
    return () => window.removeEventListener("resize", updateQrSize);
  }, []);

  const downloadImage = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = `qr-code-eventosnap-${event.name
        .replace(/[^\w]+/g, "-")
        .toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      setIsOpen(false);
    }
  };

  const printImage = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const win = window.open("", "_blank");
      if (win) {
        win.document.write(`
          <html>
            <head>
              <title>QR Code</title>
            </head>
            <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh;">
             <img src="${image}" style="max-width: 400px;" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        win.document.close();
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 hover:text-blue-500 cursor-pointer"
      >
        Gerar QR Code
      </button>

      {isOpen && (
        <div
          className={clsx(
            "bg-black/50 backdrop-blur-sm fixed inset-0 z-40 flex items-center justify-center"
          )}
          onClick={() => setIsOpen(false)} // Fecha ao clicar fora
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative z-50"
            onClick={(e) => e.stopPropagation()} // Impede o clique de fechar se for dentro
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              QR Code do Evento
            </h2>

            <div ref={qrRef} className="flex justify-center mb-4">
              <QRCodeCanvas
                className="max-w-[400px] w-full"
                value={url}
                size={qrSize}
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={downloadImage}
                className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
              >
                Baixar
              </button>
              <button
                onClick={printImage}
                className="bg-gray-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-gray-700"
              >
                Imprimir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
