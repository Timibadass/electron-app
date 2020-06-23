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
        countryIndex: '',
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
    getters: {},
    mutations: {
        getRandomCounty: state => {
            let countriesLength = state.countries.length;
            let countryIndex = Math.floor(Math.random() * (countriesLength - 1) + 1);
            state.countryIndex = countryIndex
        }
    },
    actions: {
        async getTopNews(context, country) {
            let res = await axios({
                url: `/top-headlines?country=${country}`,
                method: "GET",
            });
            return res;
        },
        async getEveryNews(context, query = 'technology') {
            let res = await axios({
                url: `/everything?q=${query}`,
                method: "GET",
            });
            return res;
        },
    },
});

export default store;