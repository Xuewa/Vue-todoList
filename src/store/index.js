import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	totalTime: 1.5,
	list: [{user: {userName: '小敏',
		imgSrc: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
	},
		date: '2017-06-08',
		desc: '我要做一件傻事',
		useTime: 1.5}]
}
export default new Vuex.Store({state})
