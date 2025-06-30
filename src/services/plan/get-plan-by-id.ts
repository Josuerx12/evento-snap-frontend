import { cookies } from "next/headers";
import { Plan } from "@/interfaces/plan.type";

export async function getPlanById(id: string): Promise<Plan> {
  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${id}`,
    {
      next: { tags: ["plan", id] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
