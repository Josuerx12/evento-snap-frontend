"use server";

import { UserOutput } from "@/types/user.type";
import { cookies } from "next/headers";
import { api } from "./api.service";
import { redirect } from "next/navigation";

export async function verifyAuth() {
  const Cookies = await cookies();

  const token = Cookies.get("eventosnap-token");

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token.value}`;
  } else {
    api.defaults.headers.common.Authorization = "";
  }
}

export async function getUser() {
  try {
    await verifyAuth();

    const res = await api.get<UserOutput>("/user/logged");

    return res.data;
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
