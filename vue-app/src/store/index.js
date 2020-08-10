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
        articles: null
    },
    getters: {},
    mutations: {
        getRandomCounty: state => {
            let countriesLength = state.countries.length;
            let countryIndex = Math.floor(Math.random() * (countriesLength - 1) + 1);
            state.countryIndex = countryIndex
        },
        saveTopNews: (state, articles) => {
            state.articles = articles
        }

    },
    actions: {
        async getTopNews({ commit }, country) {
            let res = await axios({
                url: `/top-headlines?country=${country}`,
                method: "GET",
            });
            commit('saveTopNews', res.data.articles);
        },
        async getEveryNews({ commit }, query = 'technology') {
            let res = await axios({
                url: `/everything?q=${query}`,
                method: "GET",
            });

            commit('saveTopNews', res.data.articles);
        },
    },
});

export default store;