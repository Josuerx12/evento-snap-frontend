import { PagitationOutput } from "@/interfaces/contracts/pagination";
import { EventOutput } from "@/types/event.type";
import { cookies } from "next/headers";

export async function GetUserEventsAction({
  perPage,
  page,
  filter,
}: {
  perPage?: string;
  page?: string;
  filter?: Record<string, any>;
}): Promise<PagitationOutput<EventOutput>> {
  const queryParams = new URLSearchParams({
    ...(perPage && { perPage }),
    ...(page && { page }),
    ...filter,
  }).toString();

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/user?${queryParams}`,
    {
      next: { tags: ["events"] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
