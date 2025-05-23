import { userApi } from "~/api/user";
import type { MeResponse } from "~/types/user.types";

export const useUser = () => {
  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await userApi.login(email, password);

      if (data.value && !error.value) {
        useCookie("token").value = data.value.response.access_token;
      }
      return { success: true, data: data.value };
    } catch (error) {
      console.error("Ошибка при входе:", error);
      return { success: false, error: error };
    }
  };

  const getMe = async (): Promise<{ data?: MeResponse; error?: any }> => {
    try {
      const { data, error } = await userApi.me();

      if (data.value && !error.value) {
        const userData = data.value.response;

        useUserStore().setUser(userData);
      }

      return { error: error.value };
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
      return { error: error };
    }
  };

  return {
    login,
    getMe,
  };
};
