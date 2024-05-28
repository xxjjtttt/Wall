import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import MainLayout from "@/layout/MainLayout.vue"
import PostView from "@/views/PostView.vue"
import UserView from "@/views/UserView.vue";
import SearchView from "@/views/SearchView.vue";
import CreateView from "@/views/CreateView.vue";
import NotFound from "@/views/NotFound.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home-layout",
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: "home-view-first",
                    redirect: "/1"
                },
                {
                    path: ":index(\\d+)",
                    name: "home-view",
                    component: HomeView
                }
            ]
        },
        {
            path: "/post",
            name: "post-layout",
            component: MainLayout,
            children: [
                {
                    path: ":postId(\\d+)",
                    name: "post-view",
                    component: PostView
                }
            ]
        },
        {
            path: "/user",
            name: "user-layout",
            component: MainLayout,
            children: [
                {
                    path: ":userId(\\d+)",
                    name: "user-view",
                    component: UserView
                }
            ]
        },
        {
            path: "/search",
            name: "search-layout",
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: "search-view",
                    component: SearchView
                }
            ]
        },
        {
            path: "/create",
            name: "create-layout",
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: "create-view",
                    component: CreateView
                }
            ]
        },
        {
            path: "/login",
            name: "login-layout",
            component: LoginView
        },
        {
            path: "/signup",
            name: "signup-layout",
            component: SignupView
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
})


router.beforeEach((to, from, next) => {
    const id = localStorage.getItem("id")
    const email = localStorage.getItem("email")
    const name = localStorage.getItem("name")
    const password = localStorage.getItem("password")
    if (to.path !== "/login" && to.path !== "/signup" && !id && !email && !name && !password) {
        next("/login")
    }else {
        next()
    }
})
export default router
