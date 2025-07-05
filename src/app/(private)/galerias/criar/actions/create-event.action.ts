"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export type CreateEventErrorsT = {
  message?: string;
  statusCode?: number;
  error?: {
    name?: [string];
    description?: [string];
    eventDate?: [string];
  };
  data?: {
    name?: string;
    description?: string;
    eventDate?: string;
  };
};

export async function CreateEventAction(
  _: any,
  plan: FormData
): Promise<CreateEventErrorsT> {
  const data = Object.fromEntries(plan.entries());

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: plan,
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return {
      ...errorData,
      data,
    };
  }

  revalidateTag("events");

  redirect("/galerias/estatisticas", RedirectType.push);
}
