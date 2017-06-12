import * as types from './mutation-types'

export default {
	decTotalTime({commit}, time) {
		commit(types.DEC_TOTAL_TIME, time)
	},
	deletePlan({commit}, idx) {
		commit(types.DEC_TOTAL_PLAN, idx)
	},
	addTotalTime({commit}, time) {
		commit(types.ADD_TOTAL_TIME, time)
	},
	addPlan({commit}, plan) {
		commit(types.ADD_TOTAL_PLAN, plan)
	}
}
