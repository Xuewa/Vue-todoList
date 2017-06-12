<template>
<div>
	<router-link class="btn btn-success" to="/time-entries/log-time">创建</router-link>
	
	<router-view></router-view>

	<div class="entiries_list">
		<p v-if="!plans.length">没有时间计划</p>
		<ul  v-for="(plan,idx) in plans" class="list-group">
			<li class="list-group-item clearfix"> 
				<div class="col-sm-3 left">
					<img v-bind:src="plan.user.imgSrc" width="50" height="60" class="user_img"/>
					<span class="userName">{{plan.user.userName}}</span>
				</div>
				<div class="col-sm-8 right">
					<span class="plan_icon">
						<span><i class="glyphicon glyphicon-time"></i>{{plan.useTime}}</span>
						<span>{{plan.date}}</span>
					</span>
					<p>{{plan.desc}}</p>
				</div>
				<div class="col-sm-1">
					<button class="btn btn-xs delete-button" v-on:click="deletePlan(idx)">x</button>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>
<style type="text/css">
	.list-group-item{
		position: relative;
	}
	.left{
		float: left;
	}
	.userName{
		display: block;
		text-align: center;
	}
	.plan_icon{
		float: left;
	}
	.plan_icon span{
		display: block;
		text-align: center;
		font-size: 20px;
		margin-right:10px;
	}
	.delete-button{
		position: absolute;
		right: -10px;
		top: -35px;
	}


</style>
<script type="text/javascript">
	export default{
		name: 'timeEntries',
		computed: {
			plans () {
				// console.log(this)
				return this.$store.state.list
			}
		},
		methods: {
			deletePlan (idx) {
				// 减少总时间
				this.$store.dispatch('decTotalTime', this.plans[idx].useTime)
				// 事件清除
				this.$store.dispatch('deletePlan', idx)
			}
		}
	}
</script>
