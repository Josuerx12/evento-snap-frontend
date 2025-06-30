"use server";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export type SignInErrorsT = {
  message?: string;
  statusCode?: number;
  error?: {
    login: [string];
    password: [string];
  };
};

export async function signIn(prevState: any, formData: FormData) {
  const Cookies = await cookies();

  const data = Object.fromEntries(formData.entries());

  console.log("SignIn Data:", data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: data.login,
      password: data.password,
    }),
  });

  console.log("SignIn Response:", res);

  if (!res.ok) {
    const errorData = await res.json();
    console.log(errorData);
    return errorData as SignInErrorsT;
  }

  const authResponse = await res.json();

  Cookies.set("eventosnap-token", authResponse.accessToken);

  redirect("/galerias/estatisticas", RedirectType.push);
}
