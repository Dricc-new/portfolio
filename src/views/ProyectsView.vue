<script setup lang="ts">
import ProyectItem from '../components/ProyectItem.vue';

const proyects = [
    { name: "IDommerce" },
    { name: "DevCunt" },
    { name: "Contratarte" },
    { name: "Dengi" },
    { name: "PhotoIA" },
    { name: "SD Project" }
]
</script>
<template>
    <section class="w-screen h-screen overflow-hidden pt-16 pb-6 flex">
        <aside class="w-64 p-4">
            <ul class="flex flex-col gap-2">
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
                <li>NestJS</li>
            </ul>
        </aside>
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container px-4">
            <li v-for="item in proyects" :key="item.name" class="flex justify-center">
                <ProyectItem :name="item.name"></ProyectItem>
            </li>
        </ul>
    </section>
</template>