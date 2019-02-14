//入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 内部会给vm对象和组建对象添加一个属性:$http
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>',
    router
})