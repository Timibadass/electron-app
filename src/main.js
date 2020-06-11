import Vue from "vue";
import App from "./App.vue";
import instance from "@/plugins/axios";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

Vue.prototype.$axios = instance;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");