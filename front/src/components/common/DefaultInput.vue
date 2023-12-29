<template>
    <label class="w-full flex flex-col">
        <span class="mb-1.5 text-lg text-[#0C1421]">{{ props.label }}</span>
        <input class="border-2 border-[#D4D7E3] bg-[#F3F7FB] outline-none focus:ring-[#162D3A] focus:border-[#162D3A] rounded-lg p-2" :type="props.type || 'text'" v-model="props.modelValue" :placeholder="props.placeholder">
    </label>
</template>

<script lang="ts" setup>
const props = defineProps<{ modelValue: string, type?: string, label: string, placeholder: string }>();

</script>