"use server";

import { cookies } from "next/headers";
import { api } from "./api.service";
import { redirect } from "next/navigation";

export async function getToken() {
  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token");

  return token;
}

export async function getUser() {
  try {
    const token = await getToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logged`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value || ""}`,
      },
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function logout() {
  const Cookies = await cookies();

  Cookies.delete("eventosnap-token");
  api.defaults.headers.common.Authorization = "";

  redirect("/");
}
