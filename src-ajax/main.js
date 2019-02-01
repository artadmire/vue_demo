//入口
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// 内部会给vm对象和组建对象添加一个属性:$http
Vue.use(VueResource)
new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})