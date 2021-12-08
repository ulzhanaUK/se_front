import Vue from 'vue'
import Router from 'vue-router'
const Main = resolve => require(['@/pages/Main.vue'], resolve)
const Register = resolve => require(['@/pages/Register.vue'], resolve)
const LoginPre = resolve => require(['@/pages/Login_pre.vue'], resolve)
const Login = resolve => require(['@/pages/Login.vue'], resolve)
const Hotel1 = resolve => require(['@/pages/Hotel1.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/loginPre',
      name: 'LoginPre',
      component: LoginPre
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/hotel1',
      name: 'Hotel1',
      component: Hotel1
    }
  ]
})