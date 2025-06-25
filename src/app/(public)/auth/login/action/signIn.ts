import { api } from "@/services/api.service";
import Cookies from "js-cookie";

export async function signIn({
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
    const res = await api.post<{ accessToken: string; exp: number }>(
      "/auth",
      data
    );

    Cookies.set("eventosnap-token", res.data.accessToken, {
      expires: res.data.exp,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
