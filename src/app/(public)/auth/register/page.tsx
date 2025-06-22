"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Cadastro:", data);
  };

  return (
    <main className="max-w-md mx-auto py-20 px-4 animate-fade-in">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">
        Criar conta no EventoSnap
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-1">Nome</label>
          <input
            {...register("name")}
            type="text"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Senha</label>
          <input
            {...register("password")}
            type="password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#C19B5C] text-white px-6 py-2 rounded w-full hover:opacity-90 transition"
        >
          Criar Conta
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Já tem uma conta?{" "}
        <a href="/auth/login" className="text-[#C19B5C] underline">
          Entrar
        </a>
      </p>
    </main>
  );
}
