import Vue from 'vue'
import Router from 'vue-router'

// 首页
import PageMain from '../layout/Main.vue'
import Page1 from '../../project1/views/home/Home.vue'
import Page2 from '../../project2/views/home/Home.vue'
import Page3 from '../../project3/views/home/Home.vue'
import Page4 from '../../project4/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/page1',
      component: PageMain,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/page1',
          name: 'Page1',
          component: Page1,
          meta: {
            title: '页面1'
          }
        },
        {
          path: '/page2',
          name: 'Page2',
          component: Page2,
          meta: {
            title: '页面2'
          }
        },
        {
          path: '/page3',
          name: 'Page3',
          component: Page3,
          meta: {
            title: '页面3'
          }
        },
        {
          path: '/page4',
          name: 'Page4',
          component: Page4,
          meta: {
            title: '页面4'
          }
        }
      ]
    }
  ]
})
