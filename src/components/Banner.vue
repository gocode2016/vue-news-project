<template>
	<div id="banner">
		<div class="banner">
			<ul class="clearfix">
				<li>
					<img src="../assets/images/img_1.jpg" alt=""/>
					<div class="text-box">
						<h2>还可以降低首付款购房</h2>
						<p>小茗同学</p>
					</div>
				</li>
				<li>
					<img src="../assets/images/img_2.jpg" alt=""/>
					<div class="text-box">
						<h2>好好学习非常重要</h2>
						<p>小亮同学</p>
					</div>
				</li>
				<li>
					<img src="../assets/images/img_3.jpg" alt=""/>
					<div class="text-box">
						<h2>强势来袭巅峰潮流</h2>
						<p>小胡同学</p>
					</div>
				</li>
			</ul>
			<ol>
				<li class="active"></li>
				<li></li>
				<li></li>
			</ol>
		</div>
	</div>
</template>

<script>
	// 控制轮播图的代码
	export default{
		mounted(){
      		// 加载完毕需要执行 
      		this.slider()
	  	},
	  	methods:{
	  		slider(){
	  			$(function(){
	  				var mySwipe = Swipe($('.banner')[0],{
	  					auto:2000,
	  					continuous:true,
	  					stopPropation:true,
	  					callback:function(index,element){
	  						$('.banner ol li').removeClass('active');
	  						$('.banner ol li').eq(index).addClass('active');
	  					}
	  				});
	  			});
	  		}
	  	}
	}
</script>