import { EventOutput } from "@/types/event.type";
import { cookies } from "next/headers";

export async function GetEventByIdAction(id: string): Promise<EventOutput> {
  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
    {
      next: { tags: ["events", id] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
