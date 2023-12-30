<template>
    <transition name="slide-fade">
        <div v-if="open"
             class="min-w-60 flex items-center justify-between gap-6 fixed right-3 top-3 border-red-600 p-3 border-2 rounded-md">
            <h1 class="text-xl">{{ props.text }}</h1>
            <cancle-icon @click="closeToast"/>
        </div>
    </transition>
</template>

<script setup lang="ts">
import eventBus from "~/utils/eventBus";
import {ref} from 'vue';
import CancleIcon from "~/components/icons/CancleIcon.vue";
import {useToast} from "~/constant/useToast";

const props = defineProps<{ id: string, text: string }>();

const open = ref(false);

function closeToast() {
    useToast('error').close();
}

eventBus.on('toast.open', ({id}: any) => {
    if (props.id === id) {
        open.value = true;
        setTimeout(() => {
            useToast('error').close();
        }, 3000);
    }
})

eventBus.on('toast.close', ({id}: any) => {
    if (props.id === id) {
        open.value = false;
    }
})

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>