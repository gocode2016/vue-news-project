import Vue from 'vue'
import App from './App.vue'
// 引用路由
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'
import filters from './filters'

// 遍历所有过滤器
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

// 使用路由
Vue.use(VueRouter);
Vue.use(Loading);

// 关于axios的配置
// 发送请求
axios.interceptors.request.use(function(config){
	//发送请求，显示加载
	store.dispatch('showLoading')
	return config;
},function(err){
	return Promise.reject(error);
});

// 请求回来
axios.interceptors.response.use(function(response){
	// 请求回来，隐藏加载
	store.dispatch('hideLoading')
	return response;
},function(err){
	return Promise.reject(error);
});

// 把axios对象挂在Vue原型上
Vue.prototype.$http = axios;


// 定义router
const router = new VueRouter({
	// vue路由两种访问模式，一种是#，一种是history
	mode:"history",
	// 切换的时候，滚动条回到顶部
	scrollBehavior:()=>({y:0}),
	// 这个地方需要写全routes
	routes:routerConfig
})

new Vue({
  el: '#app',
  // 挂载router
  router,
  store,
  render: h => h(App)
})
