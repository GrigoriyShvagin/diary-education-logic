import { userApi } from "~/api/user";

export const useUser = () => {
  const login = async (email: string, password: string) => {
    const response = await userApi.login(email, password);
    if (response.value) {
      localStorage.setItem("token", response.value.access_token);
    }
  };

  return { login };
};
