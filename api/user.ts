export const userApi = {
  login: async (email: string, password: string) => {
    const { data } = await useFetch(`auth/login`, {
      baseURL: useRuntimeConfig().public.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: `grant_type=password&username=${email}&password=${password}`,
    });
    return data;
  },
};
