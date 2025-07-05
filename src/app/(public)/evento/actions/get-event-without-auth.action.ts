import { EventOutput } from "@/types/event.type";

export async function GetEventWithoutAuth(id: string, eventToken: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}/${eventToken}`
  );

  if (res.ok) {
    return (await res.json()) as EventOutput;
  }

  throw new Error("Não foi possivel encontrar o evento.");
}
