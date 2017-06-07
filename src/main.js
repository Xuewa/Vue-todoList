import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import './assets/css/bootstrap/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [{ path: '/', component: Home },
{ path: '/home', component: Home }]
const router = new VueRouter({ routes })
/* eslint-disable no-unused-vars */ // 实例化我们的Vue
var app = new Vue({el: '#app', router, ...App})

