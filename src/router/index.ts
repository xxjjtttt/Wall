// 引入路由
import {createRouter, createWebHistory} from "vue-router"

// 创建路由
const router = createRouter({
    history: createWebHistory(), // 设置工作模式
    // history: createWebHashHistory(),
    routes: [
        {
            name: 'index',
            path: '/',
            component: () => import("@/layout/Main.vue"),
            children: [
                {
                    name: "post",
                    path: "",
                    component: () => import("@/views/Home.vue")
                }
            ]
        }
    ]
})

export default router
