<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Icon from './Icon.vue';
defineProps({
  name: String
})
</script>
<template>
  <RouterLink to="/" class="flex flex-col gap-4 justify-center">
    <article class="rounded overflow-hidden border border-stone-800 bg-stone-900 hover:shadow-lg hover:shadow-sky-800 cursor-pointer shadow-dark-700">
      <div class="relative">
        <img src="/code.jpg" class="w-full object-cover">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-2">
          <div
            class="flex self-center bg-dark-900 m-4 items-center justify-center p-1 px-4 rounded-full gap-2 shadow-sm shadow-sky-800">
            <Icon class="w-8 h-8" icon="nestjs" />
            <Icon class="w-8 h-8" icon="vuejs" />
          </div>
        </div>
      </div>
      <div class="cursor-pointer p-2 flex justify-center">
        <h2
          class="text-center text-lg font-medium relative before:p-2 before:h-full before:blur-sm before:rounded-full before:-z-10 before:absolute before:w-full hover:before:bg-dark-700">
          {{ name }}
        </h2>
      </div>
    </article>

  </RouterLink>
</template>