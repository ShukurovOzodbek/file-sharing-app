<script setup lang="ts">

</script>

<template>
    <div class="loading-block">
        <span class="loader"></span>
    </div>
</template>

<style scoped>
.loading-block {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
}

.loader {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite
}

.loader::before, .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite;
}

.loader::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: #526AFF;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
}

@keyframes prixClipFix {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
    }
    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
    }
    75%, 100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
    }
}
</style>