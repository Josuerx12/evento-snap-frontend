import SubmitButton from "@/components/buttons/SubmitButton";
import Form from "@/components/form/Form";
import { createPlan } from "@/services/plan/create-plan.action";
import { Save } from "lucide-react";

const NewPlanPage = () => {
  return (
    <main className="w-full mx-auto p-6">
      <h3 className="text-3xl text-center">Novo Plano</h3>

      <Form
        action={createPlan}
        className="max-w-[80vw] mx-auto bg-eventosnap-beige p-4 rounded mt-6"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Nome do Plano
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="price">
            Preço (R$)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="events">
            Eventos
          </label>
          <input
            type="number"
            name="events"
            id="events"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="photoLimit"
          >
            Limite de Fotos
          </label>
          <input
            type="number"
            name="photoLimit"
            id="photoLimit"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="storageLimitMb"
          >
            Limite de Armazenamento (MB)
          </label>
          <input
            type="number"
            name="storageLimitMb"
            id="storageLimitMb"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="duration">
            Duração (dias)
          </label>
          <input
            type="number"
            name="duration"
            id="duration"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <SubmitButton title="Criar novo plano">
          Salvar <Save />
        </SubmitButton>
      </Form>
    </main>
  );
};

export default NewPlanPage;
