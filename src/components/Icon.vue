<script setup lang="ts">
defineProps({
    icon: String
})
</script>
<template>
    <div class="w-12 h-12">
        <img :src="'/icon/' + icon + '.svg'">
    </div>
</template>