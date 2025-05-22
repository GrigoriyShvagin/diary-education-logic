<script lang="ts" setup>
import { userApi } from "~/api/user";

const email = ref("");
const password = ref("");
const loading = ref(false);
const emailFocused = ref(false);
const passwordFocused = ref(false);

const isEmailActive = computed(() => emailFocused.value || email.value !== "");
const isPasswordActive = computed(
  () => passwordFocused.value || password.value !== ""
);

const handleLogin = async () => {
  loading.value = true;
  const response = await userApi.login(email.value, password.value);
  console.log(response);
};
</script>

<template>
  <div
    class="flex h-screen w-screen bg-[url('/images/bg-auth.png')] bg-cover !font-LatoRegular bg-center"
  >
    <div class="flex items-center justify-center w-full">
      <div
        class="w-full max-w-md space-y-8 bg-white rounded-xl shadow-lg mx-4 p-16"
      >
        <div class="text-center">
          <p class="mt-2 text-lg text-primary font-bold text-left">Войдите в</p>
        </div>
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div class="space-y-4">
            <div class="relative">
              <input
                id="email"
                required
                v-model="email"
                @focus="emailFocused = true"
                @blur="emailFocused = false"
                class="block w-full px-3 pt-6 pb-2 text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                :class="{ 'text-primary': isEmailActive }"
              >
                Email
              </label>
            </div>
            <div class="relative">
              <input
                id="password"
                type="password"
                required
                v-model="password"
                @focus="passwordFocused = true"
                @blur="passwordFocused = false"
                class="block w-full px-3 pt-6 pb-2 text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="password"
                class="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                :class="{ 'text-primary': isPasswordActive }"
              >
                Пароль
              </label>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-gray-900 focus:ring-green-900 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Запомнить меня
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-primary hover:text-green-950">
                Забыли пароль?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span v-if="loading">Выполняется вход...</span>
              <span v-else>Войти</span>
            </button>
          </div>
        </form>
        <div class="text-center mt-4"></div>
      </div>
    </div>
  </div>
</template>

<style>
.peer:focus ~ label,
.peer:not(:placeholder-shown) ~ label {
  transform: scale(0.75) translateY(-1rem);
}
</style>
