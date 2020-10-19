import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 接口
import instance from './api/index.js';
import apiPath from './api/path.js';
Vue.prototype.$http = instance;
Vue.prototype.$apiPath = apiPath;

//模拟数据
require('./api/mock')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
