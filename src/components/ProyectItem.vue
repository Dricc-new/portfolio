<script setup lang="ts">
import Icon from './Icon.vue';
defineProps({
  name: String
})
</script>
<template>
  <div class="flex flex-col gap-4 justify-center">
    <article class="relative rounded overflow-hidden shadow-lg hover:shadow-sky-800 cursor-pointer shadow-dark-700">
      <img src="/code.jpg" class="h-64 w-96 object-cover">
      <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-2">
        <div
          class="flex self-center bg-dark-900 m-4 items-center justify-center p-1 px-4 rounded-full gap-2 shadow-sm shadow-sky-800">
          <Icon class="w-8 h-8" icon="nestjs" />
          <Icon class="w-8 h-8" icon="vuejs" />
        </div>
      </div>
    </article>
    <div class="cursor-pointer  flex justify-center">
      <a
        class="text-center relative before:p-2 before:h-full before:blur-sm before:rounded-full before:-z-10 before:absolute before:w-full hover:before:bg-dark-700">
        {{name}}
        <span
          class="bg-gradient-to-br from-emerald-400 to-green-500 text-xs uppercase p-1 px-2 rounded-full">code</span></a>
    </div>
  </div>
</template>