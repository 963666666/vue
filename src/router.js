import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// // 引入 Home 组件
// const Home = resolve => {
//   require.ensure(['./views/Home.vue'], () => {
//       resolve(require('./views/Home.vue'))
//   })
// }

// // 引入 About 组件
// const About = resolve => {
//   require.ensure(['./views/About.vue'], () => {
//       resolve(require('./views/About.vue'))
//   })
// }
// Vue.use(Router)

// let base = `${process.env.BASE_URL}` // 动态获取二级目录

// export default new Router({
//   mode: 'history',
//   base: base,
//   routes: [{
//       path: '/',
//       name: 'home',
//       component: Home
//   }, {
//       path: '/about',
//       name: 'about',
//       component: About
//   }]
// })