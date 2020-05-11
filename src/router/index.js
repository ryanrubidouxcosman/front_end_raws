import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RawsIndex from "../views/RawsIndex.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RawsShow from "../views/RawsShow.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  { path: "/raws", name: "raws-index", component: RawsIndex, },

  { path: "/products", name: "products-index", component: ProductsIndex },

  { path: "/signup", name: "signup", component: Signup },

  { path: "/login", name: "login", component: Login },

  { path: "/logout", name: "logout", component: Logout },

  { path: "/raws/:id", name: "raws-show", component: RawsShow }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
