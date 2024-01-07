import axios from "axios";
import {parseJwt} from "~/utils/auth";

export default defineNuxtRouteMiddleware(async () => {
    const token: any = useCookie('token');
    const url = import.meta.env.VITE_API_URL;
    
    if (!token.value) {
        return navigateTo('/login');
    }
    
    const parsed = parseJwt(token.value);
    
    if (!parsed?.userId) {
        return navigateTo('/login');
    }
    
    try {
        await axios.get(`${url}/users/${parsed.userId}`)
    } catch (e) {
        return navigateTo('/login');
    }
    
});