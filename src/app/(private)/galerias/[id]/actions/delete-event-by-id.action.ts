"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export async function DeleteEventById(formData: FormData) {
  const id = formData.get("id");

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    revalidateTag("events");
    revalidateTag("events" + id);

    redirect("/galerias/estatisticas", RedirectType.push);
  }
}
