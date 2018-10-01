/* eslint no-unused-vars: "off" */
import _ from 'lodash'
import './style.css'
import Vue from 'vue'
import App from './App.vue'
import writeLog from './logger.js'

(() => new Vue({ // no linter directive need anymore
  el: '#app',
  render: h => h(App)
}))()

if (module.hot) {
  module.hot.accept('./logger.js', function () {
    console.log('Accepting the updated printMe module!')
    writeLog()
  })
}
