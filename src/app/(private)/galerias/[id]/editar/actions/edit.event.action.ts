"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export type EditEventErrorsT = {
  message?: string;
  statusCode?: number;
  successMsg?: string;
  error?: {
    name?: [string];
    description?: [string];
    eventDate?: [string];
  };
};

export async function EditEventAction(
  _: any,
  formData: FormData
): Promise<EditEventErrorsT> {
  const id = formData.get("id");

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return errorData;
  }

  revalidateTag("events");

  return {
    successMsg: "Evento atualizado com sucesso!",
  };
}
