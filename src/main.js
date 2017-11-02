// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './assets/css/common.css'
import store from './store/store'

Vue.config.productionTip = false
/*注册主题*/
Vue.use(VueMaterial)
// 配置主题 -- 配置默认主题
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('blue', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('teal', {
  primary: 'teal',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('brown', {
  primary: 'brown',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('indigo', {
  primary: 'indigo',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.material.registerTheme('whiteForm', {
  primary: 'white',
  accent: 'deep-orange',
  warn: 'red',
  background: 'white'
})

/*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v2/?url='                    // 线上代理地址

//路由登录权限
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (false) {
          next();
      } else {
          next({
              path: '/login'
          });
      }
  } else {
      next();
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
