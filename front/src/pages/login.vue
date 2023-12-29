<template>
    <div class="w-full h-screen flex justify-center">
        <div class="flex flex-col gap-4 w-11/12 my-5">
            <img src="~/public/images/flowers.jpg" class="w-full h-52 object-cover rounded-2xl" alt="">
            <div class="flex flex-col gap-2 mb-5">
                <h1 class="text-4xl font-bold mb-5">Welcome Back 👋</h1>
                <span class="text-lg">Today is a new day. It's your day. You shape it. <br> Sign in to start managing your projects.</span>
            </div>
            <form class="flex flex-col gap-4">
                <default-input v-model="user.email" label="Почта" placeholder="example@gmail.com"/>
                <default-input v-model="user.password" label="Пароль" placeholder="At least 8 characters"/>
                <nuxt-link class="text-light-blue text-lg font-semibold">Forgot Password ?</nuxt-link>
                <loading-button :is-loading="isLoading" text="Войти"/>
            </form>
            <div class="grid grid-cols-3 gap-3 items-center justify-center">
                <div class="border border-[#CFDFE2] h-0 w-full"></div>
                <span class="text-[#294957] text-lg">Or sign in with</span>
                <div class="border border-[#CFDFE2] h-0 w-full"></div>
            </div>
            <div class="flex gap-4 items-center">
                <google-oauth/>
                <google-oauth/>
            </div>
            <span class="text-center text-lg font-semibold text-[#313957]">
                Don't you have an account?
                <nuxt-link class="text-light-blue">Sign up</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DefaultInput from "~/components/common/DefaultInput.vue";
import LoadingButton from "~/components/common/loading-button.vue";
import GoogleOauth from "~/components/oauth/GoogleOauth.vue";

definePageMeta({
    layout: false
});

const user = ref({email: '', password: ''});
const isLoading = ref(false);

</script>