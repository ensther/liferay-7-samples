<template>
  <div class="portlet__wrapper container-fluid-1280 main-content-body">
    <div class="portlet sheet">
      <h1 class="portlet__title">Vue.js Portlet</h1>
      <p class="portlet__version">Version: {{ version }}</p>
      <p class="portlet__version">portletNamespace: {{ portletNamespace }} -- from props</p>
      <p class="portlet__version">contextPath: {{ this.$root.contextPath }}</p>
      <p class="portlet__version">portletElementId: {{ this.$root.portletElementId }}</p>
      <p class="portlet__version">configuration: {{ configuration }} -- from props</p>
      <configuration />

      <p><clay-badge v-bind:label="label"></clay-badge></p>
      <p><clay-button v-on:click="count++" label="Click (WebComponent)"></clay-button></p>
    </div>
  </div>
</template>

<script>
import 'clay-button'
import 'clay-badge'
import Configuration from './configuration/index.vue'

export default {
  name: 'Parent',
  props: {
    portletNamespace: String,
    configuration: Object
  },
  components: {
    Configuration
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    label: function () {
      return `"${this.count}"`
    },
    version () {
      return '1.1.0'
    }
  }
}
</script>

<style lang="scss" scoped>
.portlet {
  margin-bottom: 20px;
}
</style>
