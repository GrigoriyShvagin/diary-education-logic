import type { MeResponse } from "~/types/user.types";

export const useUserStore = defineStore("user", () => {
  const user = ref<MeResponse | null>(null);
  const isAuthenticated = ref(false);
  const isLoading = ref(true);

  const setUser = (userData: MeResponse) => {
    user.value = userData;
    isAuthenticated.value = true;
    isLoading.value = false;
  };

  const clearUser = () => {
    user.value = null;
    isAuthenticated.value = false;
    isLoading.value = false;
  };

  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    isLoading: readonly(isLoading),

    setUser,
    clearUser,
  };
});
