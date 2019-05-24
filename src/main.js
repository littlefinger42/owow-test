import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import './style/imports.scss'

Vue.use(BootstrapVue)

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

new Vue({
  render: h => h(App),
}).$mount('#app')
