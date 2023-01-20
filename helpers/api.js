import axios from "axios";

export const apiVT = axios.create({
    baseURL: 'https://www.skybiz.cl/sumar.api',
    mode: 'no-cors',
    cache: 'default'
});
