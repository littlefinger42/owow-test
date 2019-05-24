import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import './style/imports.scss'
import Rounds from './pages/Rounds.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.mixin({
  data: () => {
    return {
      get endpointUrl() {
        return 'https://api.wearematchplay.com/v2'
      }
    }
  }
})

const routes = [{ path: '/cup/:id', component: Rounds }]
const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
