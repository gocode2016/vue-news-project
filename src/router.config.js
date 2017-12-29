import Home from "./components/Home.vue"
import Follow from "./components/Follow.vue"
import Column from "./components/Column.vue"
import UserInfo from "./components/UserInfo.vue"
import Article from "./components/Article.vue"
import UserLogin from "./components/UserLogin.vue"
import UserReg from "./components/UserReg.vue"

export default [
	{
		path:'/home',component:Home
	},{
		path:'/follow',component:Follow
	},{
		path:'/column',component:Column
	},{
		path:'/user-info',component:UserInfo
	},{
		path:'/article/:id',component:Article
	},{
		path:'/user-login',component:UserLogin
	},{
		path:'/user-reg',component:UserReg
	},{
		// redirect路由重定向
		// 表示路由为根的时候，显示Home
		path: '/', redirect: '/home'
	},{
		// 表示404的时候，显示Home
		path:'*',redirect:'./home'
	}
]