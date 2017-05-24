import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Work',
      component: Work
    }
  ]
})
