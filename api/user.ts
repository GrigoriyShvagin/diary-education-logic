import type {
  ApiResponse,
  MeResponse,
  UserMeApiResponse,
} from "~/types/user.types";
import { apiRequest } from "./index";

export const userApi = {
  login: async (
    email: string,
    password: string
  ): Promise<{
    data: any;
    error: any;
  }> => {
    return await useFetch(`auth/login`, {
      baseURL: useRuntimeConfig().public.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: `grant_type=password&username=${email}&password=${password}`,
      credentials: "include",
    });
  },

  me: async () => {
    return await apiRequest<ApiResponse<MeResponse>>("/users/me", {
      method: "GET",
    });
  },
};
