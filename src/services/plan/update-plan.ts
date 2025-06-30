"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function updatePlan(prevState: any, plan: FormData) {
  const data = Object.fromEntries(plan.entries());

  console.log(data);

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
      body: JSON.stringify({
        ...data,
        events: parseInt(data.events as string),
        storageLimitMb: parseInt(data.storageLimitMb as string),
        photoLimit: parseInt(data.photoLimit as string),
        duration: parseInt(data.duration as string),
      }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return errorData;
  }

  revalidateTag("plans");
  revalidateTag("plan" + data.id);

  redirect("/dashboard/planos/", RedirectType.push);
}
