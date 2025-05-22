const baseUrl = process.env.BASE_URL;

export const userApi = {
  login: async (email: string, password: string) => {
    console.log(baseUrl, process.env.BASE_URL);
    const { data } = await useFetch(`auth/login`, {
      baseURL: baseUrl,
      method: "POST",
      body: { email, password },
    });
    return data;
  },
};
