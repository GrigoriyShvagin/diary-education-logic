<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const userStore = useUserStore();

const user = computed(() => userStore.user);
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Добро пожаловать в дневник!</h1>

    <div v-if="user" class="bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-2">Привет, {{ user.full_name }}!</h2>
      <p class="text-gray-600">Email: {{ user.email }}</p>
      <p class="text-gray-600">Роль: {{ user.role }}</p>
      <p class="text-gray-600">
        Статус: {{ user.is_active ? "Активен" : "Неактивен" }}
      </p>
    </div>

    <div v-else class="bg-gray-100 rounded-lg p-6">
      <p>Загрузка данных пользователя...</p>
    </div>
  </div>
</template>

<style></style>
