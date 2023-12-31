<template>
    <button class="w-full bg-light-blue rounded-lg p-3.5 text-xl font-bold text-white">
        <span v-if="!isLoading">{{ props.text }}</span>
        <loader v-else/>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ isLoading: boolean, text: string }>()
</script>

<style scoped>
.text-white {
    color: white;
}
</style>