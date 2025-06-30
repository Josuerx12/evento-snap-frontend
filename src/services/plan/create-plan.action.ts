"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function createPlan(_: any, plan: FormData) {
  const data = Object.fromEntries(plan.entries());

  console.log("Creating plan with data:", data);

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...data,
      events: parseInt(data.events as string),
      photoLimit: parseInt(data.photoLimit as string),
      storageLimitMb: parseInt(data.storageLimitMb as string),
      duration: parseInt(data.duration as string),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return errorData;
  }

  revalidateTag("plans");

  redirect("/dashboard/planos", RedirectType.push);
}
