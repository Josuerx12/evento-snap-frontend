"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function deletePlan(formData: FormData) {
  const id = formData.get("id") as string;

  console.log("Deleting plan with ID:", id);

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    revalidateTag("plans");

    redirect("/dashboard/planos", RedirectType.push);
  }
}
