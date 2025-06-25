import { api } from "@/services/api.service";
import Cookies from "js-cookie";

export type SignInErrorsT = {
  message: string;
  statusCode: number;
  errors?: any[];
};

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

    api.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`;
  } catch (error: any) {
    if (error?.response?.data) {
      console.log(error.response.data);

      throw error.response.data;
    }

    console.log(error);

    throw error;
  }
}
