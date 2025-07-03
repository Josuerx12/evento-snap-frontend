// components/skeletons/HomePageSekeleton.tsx
import React from "react";

const HomePageSekeleton = () => {
  return (
    <main className="bg-eventosnap-off-white min-h-screen text-eventosnap-dark animate-fade-in">
      <section className="text-center py-24 px-6 bg-gray-300 animate-pulse text-white shadow-inner h-96 flex items-center justify-center">
        <div className="bg-gray-400/60 backdrop-blur-sm p-8 rounded-xl inline-block w-3/4 max-w-2xl h-64 animate-pulse">
          <div className="h-10 bg-gray-500 rounded w-3/4 mx-auto mb-6"></div>

          <div className="h-6 bg-gray-500 rounded w-full max-w-xl mx-auto mb-10"></div>

          <div className="h-6 bg-gray-500 rounded w-5/6 max-w-lg mx-auto mb-10"></div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-12 w-32 bg-gray-500 rounded"></div>

            <div className="h-12 w-32 bg-gray-500 rounded"></div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 bg-gray-300 rounded w-1/3 mx-auto mb-12 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-lg h-80 animate-pulse"
              >
                <div className="h-8 bg-gray-300 rounded w-2/3 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
                <div className="h-10 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePageSekeleton;
