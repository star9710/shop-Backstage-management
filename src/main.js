import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './assets/main.css'
import router from './router/router'//1.引入router.js

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router//2.使用router
}).$mount('#app')
