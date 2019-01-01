import Vue from 'vue'
import Router from 'vue-router'

const routerMap=[
    {
        name:'login',
        path:'/index',
        // redirect:'/index',
        component: () =>import ('@/login/index.vue'),
    },
    {
        name:'home',
        path:'/home',
        // redirect:'/home',
        component: () =>import ('@/apps/index'),
        children:[
            {
                name:'mainPage',
                path:'mainPage',
                component: () =>import ('@/apps/components/mainPage'),
            },
            {
                name:'order',
                path:'order',
                component: () =>import ('@/apps/components/order'),
            },
            {
                name:'find',
                path:'find',
                component: () =>import ('@/apps/components/find'),
            },
        ]
    },
    {
        name:'myInfo',
        path:'/myInfo',
        component: () =>import ('@/apps/myInfo/myInfo.vue'),
    },
];
Vue.use(Router);
 export default new Router({
    routes:routerMap,
    // mode:'history',
    scrollBehavior: () => ({ y: 0 }),
});
