import axios from "axios";

export const login = (password: string, email: string) => {
    const url = import.meta.env.VITE_API_URL;
    return axios.post(`${url}/authentication`, {email, password});
}

export const signup = (password: string, email: string) => {
    const url = import.meta.env.VITE_API_URL;
    return axios.post(`${url}/users`, {email, password});
}