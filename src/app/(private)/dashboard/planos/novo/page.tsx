import BackButton from "@/components/buttons/BackButton";
import CreatePlanForm from "./form/CreatePlanForm";

const NewPlanPage = () => {
  return (
    <main className="w-full mx-auto p-6">
      <BackButton />
      <h3 className="text-3xl text-center">Novo Plano</h3>

      <CreatePlanForm />
    </main>
  );
};

export default NewPlanPage;
