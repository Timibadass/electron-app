const axios = require('axios');
let baseURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_APIKEY}`

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default instance