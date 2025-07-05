import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const PaginationControls = ({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) => {
  const getPageLink = (page: number) => `${basePath}?page=${page}`;

  return (
    <div className="flex items-center gap-2 text-sm">
      <a
        href={getPageLink(currentPage - 1)}
        className={`px-3 py-1 rounded-md border ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-eventosnap-dark border-eventosnap-gold hover:bg-eventosnap-gold/20"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </a>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <a
            key={page}
            href={getPageLink(page)}
            className={`px-3 py-1 rounded-md border font-medium ${
              page === currentPage
                ? "bg-eventosnap-gold text-white border-eventosnap-gold"
                : "border-eventosnap-gold text-eventosnap-dark hover:bg-eventosnap-gold/20"
            }`}
          >
            {page}
          </a>
        );
      })}

      <a
        href={getPageLink(currentPage + 1)}
        className={`px-3 py-1 rounded-md border ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-eventosnap-dark border-eventosnap-gold hover:bg-eventosnap-gold/20"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default PaginationControls;
