import axios from "axios";
let baseURL = `https://newsapi.org/v2`;
let apiKey = process.env.VUE_APP_APIKEY;
const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        "X-Api-Key": apiKey,
    },
});

export default instance;