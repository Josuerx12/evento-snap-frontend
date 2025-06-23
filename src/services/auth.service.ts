"use server";

import { apiUrl } from "@/shared/constants";
import { UserOutput } from "@/types/user.type";
import { cookies } from "next/headers";

async function GetToken() {
  const cookeisFromHeaders = await cookies();
  const token = cookeisFromHeaders.get("eventosnap-token");

  return token?.value || null;
}

export async function getUser() {
  const token = await GetToken();

  if (!token) {
    return null;
  }

  try {
    const res = await fetch(apiUrl + "/user/logged", {
      method: "GET",
      headers: {
        ["Authorization"]: `Bearer ${token}`,
      },
      next: {
        tags: ["user"],
      },
    });

    const data: UserOutput = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function auth({
  login,
  password,
}: {
  login: string;
  password: string;
}) {
  const data = {
    login,
    password,
  };
  try {
    const res = await fetch(apiUrl + "/auth", {
      body: JSON.stringify(data),
      method: "POST",
    });

    const result = await res.json();

    const headerCookies = await cookies();

    headerCookies.set("eventosnap-token", result.accessToken, {
      expires: result.exp,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
