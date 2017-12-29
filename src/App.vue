<template>
  <div id="app">
    <!-- 自定义组件：加载 -->
    <myLoading v-show="loadingShow"></myLoading>
    <!-- 第一步添加组件代替原来的nav -->
    <NavView v-show="headerShow"></NavView>

    <!-- 显示页面时的动画 -->
    <transition name="slide-down">
      <router-view></router-view>
    </transition>
    
    <FooterView></FooterView>

  </div>
</template>

<script>

  // 第三步，引用组件nav.vue
  import NavView from './components/Nav.vue'
  import FooterView from './components/Footer.vue'
  // 引入vuex
  import {mapGetters,mapActions} from 'vuex'

  export default {
    computed:mapGetters([
      'headerShow',
      'loadingShow'
    ]),

    // 监听路由变化,当路由发生变化触发
    watch:{
      $route(to,from){
        // alert(1);
        // console.log(to,from);
        // console.log(to.path);
        if(to.path == '/user-info'){
          this.$store.dispatch('hideHeader');
        }else{
          this.$store.dispatch('showHeader');
        }
      }
    },
    // 第四步，引用完毕之后，挂载组件至components
    components:{
      NavView,
      FooterView
    }
  }
</script>

<style>
  @import './assets/css/index.css';
  .slide-down-enter-active,.slide-down-leave-active{
    transition: 0.4s all ease;
    opacity:0.4;
    transform:translate3d(0,6em,0);
  }
  .silder-down-enter,.silder-down-leave{
    opacity: 1;
    transform:translate3d(0,6em,0);
  }
</style>
