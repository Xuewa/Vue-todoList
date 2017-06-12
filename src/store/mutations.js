import * as types from './mutation-types'

export default{
	[types.DEC_TOTAL_TIME] (state, time) {
		state.totalTime -= time
	},
	[types.DEC_TOTAL_PLAN] (state, idx) {
		state.list.splice(idx, 1)
	},
	[types.ADD_TOTAL_TIME] (state, time) {
		console.log(state.totalTime)
		state.totalTime += time
	},
	[types.ADD_TOTAL_PLAN] (state, plan) {
		state.list.push(plan)
	}
}
