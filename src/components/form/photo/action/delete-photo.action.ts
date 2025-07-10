"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export type DeletePhotoErrorsT = {
  message?: string;
  statusCode?: number;
  successMsg?: string;
  error?: {
    id?: [string];
  };
};

export async function DeletePhotoAction(
  _: any,
  formData: FormData
): Promise<DeletePhotoErrorsT> {
  const id = formData.get("id");

  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token")?.value || "";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/photos/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData);
    return errorData;
  }

  revalidateTag("photos");

  return {
    successMsg: "Foto deletada com sucesso!",
  };
}
