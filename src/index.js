/* eslint no-unused-vars: "off" */
import _ from 'lodash'
import './style.pcss'
import Vue from 'vue'
import App from './App.vue'

(() => new Vue({ // no linter directive need anymore
  el: '#app',
  render: h => h(App)
}))()

if (module.hot) {
  // accept all changes, evaluate the whole js file
  module.hot.accept()
}
