import BackButton from "@/components/buttons/BackButton";
import { getPlanById } from "@/services/plan/get-plan-by-id";
import React from "react";
import EditPlanForm from "./form/EditPlanForm";

const EditPlanPage = async ({ params }: { params: any }) => {
  const param = await params;

  const { id } = param;

  const plan = await getPlanById(id);

  return (
    <main className=" w-full mx-auto p-6">
      <BackButton />

      <h3 className="text-3xl text-center">Editar Plano - {plan.name}</h3>

      <EditPlanForm plan={plan} />
    </main>
  );
};

export default EditPlanPage;
