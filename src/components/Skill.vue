<script setup lang="ts">
import Icon from './Icon.vue';

defineProps({
    icon: String,
    name: String
})
</script>
<template>
    <li class="flex items-center justify-between gap-4 text-white p-2 px-4 bg-gradient-to-br from-dark-600 to-dark-900 rounded-full">
        <Icon class="w-8 h-8" :icon="icon"/>
        <h1>{{ name }}</h1>
    </li>
</template>