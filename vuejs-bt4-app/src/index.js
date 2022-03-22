import Vue from 'vue/dist/vue.common'
import App from './components/index.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * This ist the main entry point of the portlet
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param portletNamespace
 * @param contextPath
 * @param portletElementId
 * @param configuration
 */
export default function main ({ portletNamespace, contextPath, portletElementId, configuration }) {
  Vue.config.productionTip = false

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  
  new Vue({
    el: `#${portletElementId}`,
    data: {
      portletNamespace,
      contextPath,
      portletElementId,
      configuration
    },
    components: {
      App
    },
    template: '<App :portletNamespace="portletNamespace" :configuration="configuration"/>'
    // render: h => h(App)
  })
}
