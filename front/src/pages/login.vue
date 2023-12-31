<template>
    <div class="w-full h-screen flex justify-center">
        <div class="flex flex-col gap-4 w-11/12 justify-center">
            <div class="flex flex-col gap-2 mb-5">
                <h1 class="text-4xl font-bold mb-5">Привет 👋</h1>
                <span class="text-lg">Зайдите свой аккаунт и поделитесь файлами беслатно.</span>
            </div>
            <form class="flex flex-col gap-4" @submit.prevent="submit">
                <default-input v-model="user.email" label="Почта" placeholder="example@gmail.com"/>
                <default-input v-model="user.password" label="Пароль" type="password"
                               placeholder="At least 8 characters"/>
                <nuxt-link class="text-light-blue text-lg font-semibold">Забыли Пароль ?</nuxt-link>
                <loading-button :is-loading="isLoading" text="Войти"/>
            </form>
            <div class="grid grid-cols-3 gap-3 items-center justify-center">
                <div class="border border-[#CFDFE2] h-0 w-full"></div>
                <span class="text-[#294957] text-center">Регестрируйтесь</span>
                <div class="border border-[#CFDFE2] h-0 w-full"></div>
            </div>
            <div class="flex gap-4 items-center">
                <google-oauth/>
                <google-oauth/>
            </div>
            <span class="text-center text-lg font-semibold text-[#313957]">
                Нет аккаунта ?
                <nuxt-link href="/signup" class="text-light-blue">Регестрация</nuxt-link>
            </span>
        </div>
        <error-toast id="error" :text="errors.email || errors.password"/>
    </div>
</template>

<script lang="ts" setup>
import DefaultInput from "~/components/common/DefaultInput.vue";
import LoadingButton from "~/components/common/loading-button.vue";
import GoogleOauth from "~/components/oauth/GoogleOauth.vue";
import {login} from "~/utils/auth";
import ErrorToast from "~/components/toasts/ErrorToast.vue";
import {useToast} from "~/constant/useToast";
import useValidate from "~/constant/useValidate";
import type {Ref} from "vue";

definePageMeta({
    layout: false
});

const user = ref({email: '', password: ''});
const isLoading = ref(false);
const errors: Ref<any> = ref({});

const schema = ref({
    email: {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        default: 'Заполните поле для почты',
        message: 'Пожалуйста перепроверьте поле для почты',
    },
    password: {
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        default: 'Заполните поле для пароля',
        message: 'Длина пароля должно состовлять не менее 8 симвлоов',
    }
});

async function submit() {
    isLoading.value = true;

    const data = useValidate(user.value, schema.value);

    if (data.isError) {
        isLoading.value = false;
        errors.value = data
        useToast('error').open();
        return;
    }

    login(user.value.password, user.value.email).then((res) => {
        const token = useCookie('token');
        token.value = res.data.accessToken;
    }).catch((e) => {
        errors.value.password = e.response.data.message;
        useToast('error').open();
    }).finally(() => {
        isLoading.value = false;
    });
}

</script>