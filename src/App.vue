<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router';
const menu = ref('')
window.onclick = (e: any) => {
  const { id } = e.target
  menu.value = id
}
</script>

<template>
  <div class="w-full mx-auto fixed top-0 p-1 px-4 z-50 ">
    <div class="flex justify-center rounded bg-[#202020]">
      <i id="toggle" v-if="menu != 'toggle'" class="fas fa-bars md:hidden text-xl p-1 px-3"></i>
      <menu :class="(menu == 'toggle') ? '' : 'max-md:hidden'"
        class="min-h-[36px] p-1 flex max-md:flex-col text-lg max-md:w-32 gap-2 md:gap-4">
        <li :class="{ 'active': $route?.name === 'home' }" @click="() => $router.push({ name: 'home' })">Home</li>
        <a href="#Experiense">
          <li>Experiense</li>
        </a>
        <li :class="{ 'active': $route?.name === 'proyects' }" @click="() => $router.push({ name: 'proyects' })">Proyects</li>
        <a href="#Skills">
          <li>Skills</li>
        </a>
        <a href="#ContactMe">
          <li>Contact Me</li>
        </a>
      </menu>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style>
menu>li {
  @apply cursor-pointer;
}

menu>li:hover,
menu>.active {
  @apply text-sky-600;
}
</style>