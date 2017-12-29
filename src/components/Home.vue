<template>
	<div id="home">
		<div class="content">
			<SliderBanner></SliderBanner>

			<div class="newsList">
				<ul>
					<!-- 利用循环取数据 -->
					<li v-for="(item,index) in arrList">
						<!-- to只有加冒号后才能字符串拼接 -->
						<router-link :to="'/article/'+item.id">
								<h2>{{index+1}}.{{item.title}}</h2>
								<p>{{item.detail}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import SliderBanner from "./Banner.vue"
	export default {
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			SliderBanner
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this =this;
				this.$http.get('src/data/index.data').then(function(res){
					// alert(1)
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Home',err);
				})
			}
		}
	}

</script>