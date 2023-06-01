<template>
  <div class="flex items-center justify-center min-h-screen text-slate-600">
    <div
      class="lg:w-[500px] md:w-[500px] sm:w-[90%] bg-white py-10 px-4 rounded drop-shadow-xl"
    >
      <h1 class="text-center text-4xl py-4">Login</h1>

      <p class="text-center">or use your account</p>
      <div class="py-6 px-6">
        <form>
          <div class="py-2">
            <input
              type="email"
              name="email"
              placeholder="email"
              class="p-4 rounded w-full bg-gray-200"
            />
          </div>
          <div class="py-2">
            <input
              type="password"
              name="password"
              placeholder="password"
              class="p-4 rounded w-full bg-gray-200"
            />
          </div>
          <div class="py-2 text-center">
            <a href="#">forgot password</a>
          </div>
          <div class="py-2 text-center">
            <BaseButton variant="primary" label="Sign In" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
export default {
  name: "Login",
  components: {
    BaseButton,
  }
};
</script>

<style scoped></style>
