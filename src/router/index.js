import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Custom/Index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [{
      path: 'Create',
      component: {
        template: '#children'
      }
    }]
  }
  ]
})
