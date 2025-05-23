<script lang="ts" setup>
// components
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

// refs
const route = useRoute();
const userStore = useUserStore();

const isAuth = computed(() => {
  return route.path === "/auth";
});

const checkAuthentication = async () => {
  await useUser().getMe();

  if (userStore.isAuthenticated) {
    if (route.path === "/auth") {
      await navigateTo("/");
    }
  } else {
    if (route.path !== "/auth") {
      await navigateTo("/auth");
    }
  }
};

onMounted(async () => {
  await checkAuthentication();
});

watch(
  () => route.path,
  async (newPath) => {
    if (
      newPath !== "/auth" &&
      !userStore.isAuthenticated &&
      !userStore.isLoading
    ) {
      await navigateTo("/auth");
    }
  }
);
</script>

<template>
  <div
    v-if="userStore.isLoading"
    class="flex items-center justify-center h-screen"
  >
    <div class="text-lg">Загрузка...</div>
  </div>

  <template v-else>
    <AuthLayout v-if="isAuth" />
    <MainLayout v-else />
  </template>
</template>
