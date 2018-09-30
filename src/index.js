/* eslint no-unused-vars: "off" */
import _ from 'lodash'
import './style.css'
import Vue from 'vue'
import App from './App.vue'

(() => new Vue({ // no linter directive need anymore
  el: '#app',
  render: h => h(App)
}))()
