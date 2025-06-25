"use server";

import { UserOutput } from "@/types/user.type";
import { cookies } from "next/headers";
import { api } from "./api.service";

export async function getUser() {
  const Cookies = await cookies();

  const token = Cookies.get("eventosnap_token");

  if (!token) {
    return null;
  }

  try {
    const res = await api.get<UserOutput>("/user/logged");

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
