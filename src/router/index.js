import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import About from '@/components/About'
import Order from '@/components/Order'
import Review from '@/components/Review'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }

  ]
})
