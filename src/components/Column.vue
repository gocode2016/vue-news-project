<!-- 栏目页面 -->
<template>
	<div id="home">
		<div class="content mt30">
			<div class="newsList">
				<ul>
					<!-- 利用循环取数据 -->
					<li v-for="(item,index) in arrList">
						<a href="conText.html">
							<h2>{{index+1}}.{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
		export default {
		data(){
			return {
				arrList:[]
			}
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this =this;
				this.$http.get('src/data/column.data').then(function(res){
					// alert(1)
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Column',err);
				})
			}
		}
	}
</script>

<style scoped>
	/*scoped 设置局部样式*/
	.mt30 {
		margin-top: 30px;
	}
</style>