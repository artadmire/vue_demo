import Vue from 'vue'
import vueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(vueRouter)
export default new vueRouter({
    //n个路由
    routes: [{
            path: '/about',
            component: About

        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: '/home/news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [{
                        path: '/home/message/detail/:id',
                        component: MessageDetail
                    }]
                },
                {
                    path: '',
                    redirect: '/home/news'

                }
            ]

        },
        {
            path: '/',
            redirect: '/about'

        }
    ]
})