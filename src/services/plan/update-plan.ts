"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { Plan } from "@/interfaces/plan.type";

export async function updatePlan(
  prevState: any,
  plan: FormData
): Promise<Plan> {
  const data = Object.fromEntries(plan.entries());

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  revalidateTag("plans");
  revalidateTag("plan" + data.id);

  return response.json();
}
