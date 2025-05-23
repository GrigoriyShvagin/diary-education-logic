export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path === "/auth") {
    return;
  }

  const userStore = useUserStore();

  if (userStore.isLoading) {
    return;
  }

  if (!userStore.isAuthenticated) {
    return navigateTo("/auth");
  }
});
