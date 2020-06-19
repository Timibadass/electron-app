import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        countries: [{
                name: "United States of America",
                value: "us",
            },
            {
                name: "Nigeria",
                value: "ng",
            },
            {
                name: "Argentina",
                value: "ar",
            },
            {
                name: "Canada",
                value: "ca",
            },
            {
                name: "South Africa",
                value: "za",
            },
        ],
        categories: [
            "entertainment",
            "general",
            "health",
            "science",
            "business",
            "sports",
            "technology",
        ],
    },
    mutations: {},
    actions: {
        async getTopNews(context, country) {
            let res = await axios({
                url: `/top-headlines?country=${country}`,
                method: "GET",
            });
            return res;
        },
    },
});

export default store;