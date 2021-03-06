import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import EntitryForm from './components/EntitryForm'
import store from './store'
import './assets/css/bootstrap/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [{ path: '/', component: Home },
{ path: '/home', component: Home },
{ path: '/time-entries',
component: TimeEntries,
children: [{
	path: 'log-time',
	// lazy-load
	// component: resolve => require(['./components/EntitryForm.vue'], resolve)
	component: EntitryForm
}]
}]

const router = new VueRouter({ routes })
/* eslint-disable no-unused-vars */ // 实例化我们的Vue
var app = new Vue({el: '#app', router, store, ...App})
