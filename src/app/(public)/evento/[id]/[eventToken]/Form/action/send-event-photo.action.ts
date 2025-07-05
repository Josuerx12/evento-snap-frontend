export type SendPhotoEventOutput = {
  message?: string;
  error?: {
    message?: [string];
    id?: [string];
  };
  successMsg?: string;
  data?: any;
};

export async function SendPhotoToEventAction(
  _: any,
  formData: FormData
): Promise<SendPhotoEventOutput> {
  const id = formData.get("id");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}/add-photos`,
    { method: "POST", body: formData }
  );

  if (!res.ok) {
    const plainedResponse = await res.json();
    return { ...plainedResponse, data: Object.fromEntries(formData.entries()) };
  }

  return {
    successMsg: "Fotos enviadas com sucesso!",
  };
}
