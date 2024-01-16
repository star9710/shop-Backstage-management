import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './assets/main.css'
import router from './router/router'//1.引入router.js
import axios from 'axios'//导入插件,全局引入后就不需要在各个组件中引入了，可以直接使用
import VueAxios from 'vue-axios'//导入插件
// import Vuex from 'Vuex'
// import Store from './store'



// 使用插件
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
// Vue.use(Vuex)

new Vue({
  render: (h) => h(App),
  router,//2.使用router
  // Store
}).$mount('#app')
