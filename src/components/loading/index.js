import LoadingComponent from './Loading2.vue'

const Loading = {
	install:function(Vue){
		Vue.component('myLoading',LoadingComponent)
	}
};

export default Loading