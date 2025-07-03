import BackButton from "@/components/buttons/BackButton";
import React from "react";

const EventPhotosPage = async ({ params }: { params: any }) => {
  const param = await params;
  return (
    <main className="p-6">
      <BackButton />
      {JSON.stringify(param)}
    </main>
  );
};

export default EventPhotosPage;
