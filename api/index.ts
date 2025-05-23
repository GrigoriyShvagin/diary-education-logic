export const apiRequest = async <T>(endpoint: string, options: any = {}) => {
  return await useFetch<T>(endpoint, {
    baseURL: useRuntimeConfig().public.baseUrl,
    credentials: "include", // Включаем HTTP-only cookies
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${useCookie("token").value}`,
      ...options.headers,
    },
    ...options,
  });
};
