import { cookies } from "next/headers";
import { PagitationOutput } from "@/interfaces/contracts/pagination";
import { Plan } from "@/interfaces/plan.type";

export async function getPlans({
  perPage,
  page,
  filter,
}: {
  perPage?: string;
  page?: string;
  filter?: Record<string, any>;
}): Promise<PagitationOutput<Plan>> {
  const queryParams = new URLSearchParams({
    ...(perPage && { perPage }),
    ...(page && { page }),
    ...filter,
  }).toString();

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans?${queryParams}`,
    {
      next: { tags: ["plans"] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
