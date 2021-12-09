import Vue from 'vue'
import Router from 'vue-router'
const Main = resolve => require(['@/pages/Main.vue'], resolve)
const Register = resolve => require(['@/pages/Register.vue'], resolve)
const LoginPre = resolve => require(['@/pages/Login_pre.vue'], resolve)
const Login = resolve => require(['@/pages/Login.vue'], resolve)
const Hotel1 = resolve => require(['@/pages/Hotel1.vue'], resolve)
const Booking_history = resolve => require(['@/pages/Booking_history.vue'], resolve)
const GuestMain = resolve => require(['@/pages/GuestMain.vue'], resolve)
const GuestProfile = resolve => require(['@/pages/GuestProfile.vue'], resolve)
const GuestResults = resolve => require(['@/pages/GuestResults.vue'], resolve)

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
    },
    {
      path: '/bookinghistory',
      name: 'Booking_history',
      component: Booking_history
    },
    {
      path: '/guestmain',
      name: 'GuestMain',
      component: GuestMain
    },
    {
      path: '/guestprofile',
      name: 'GuestProfile',
      component: GuestProfile
    },
    {
      path: '/guestresults',
      name: 'GuestResults',
      component: GuestResults
    },
  ]
})