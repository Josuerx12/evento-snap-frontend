import BackButton from "@/components/buttons/BackButton";
import React from "react";
import CreateEventForm from "./forms/CreateEventForm";

const CreateEventPage = () => {
  return (
    <main className="w-full mx-auto p-6">
      <BackButton />
      <h3 className="text-3xl text-center">Nova Galeria</h3>

      <CreateEventForm />
    </main>
  );
};

export default CreateEventPage;
