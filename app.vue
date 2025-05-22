<script lang="ts" setup>
// components
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
// refs
const route = useRoute();

const isAuth = computed(() => {
  return route.path === "/auth";
});
</script>

<template>
  <AuthLayout v-if="isAuth" />
  <MainLayout v-else />
</template>
