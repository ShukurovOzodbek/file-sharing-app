<template>
    <div class="w-full h-screen flex justify-center">
        <div class="flex flex-col gap-4 w-11/12 justify-center">
            <div class="flex flex-col gap-2 mb-5">
                <h1 class="text-4xl font-bold mb-5">Welcome Back 👋</h1>
                <span class="text-lg">Today is a new day. It's your day. You shape it. <br> Sign in to start managing your projects.</span>
            </div>
            <form class="flex flex-col gap-4" @submit.prevent="submit">
                <default-input v-model="user.email" label="Почта" type="email" placeholder="example@gmail.com"/>
                <default-input v-model="user.password" label="Пароль" type="password"
                               placeholder="At least 8 characters"/>
                <nuxt-link class="text-light-blue text-lg font-semibold">Forgot Password ?</nuxt-link>
                <loading-button :is-loading="isLoading" text="Войти"/>
            </form>
            <div class="grid grid-cols-3 gap-3 items-center justify-center">
                <div class="border border-[#CFDFE2] h-0 w-full"></div>
                <span class="text-[#294957] text-center">Or sign in with</span>
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
        <error-toast id="error" :text="error"/>
    </div>
</template>

<script lang="ts" setup>
import DefaultInput from "~/components/common/DefaultInput.vue";
import LoadingButton from "~/components/common/loading-button.vue";
import GoogleOauth from "~/components/oauth/GoogleOauth.vue";
import {login} from "~/utils/auth";
import ErrorToast from "~/components/toasts/ErrorToast.vue";
import {useToast} from "~/constant/useToast";

definePageMeta({
    layout: false
});

const user = ref({email: '', password: ''});
const isLoading = ref(false);
const error = ref('');

async function submit() {
    isLoading.value = true;
    login(user.value.password, user.value.email).then((res) => {
        console.log(res.data);
    }).catch((e) => {
        error.value = e.response.data.message;
        useToast('error').open();
    }).finally(() => {
        isLoading.value = false;
    });
}

</script>