<template>
	<form action="" class="form-horizon">
		<div class="form-group">
			<label for="useTime" class="col-sm-3">用户时间</label>
			<div class="col-sm-9">
				<input type="text" v-model="useTime">
			</div>
		</div>
		<div class="form-group">
			<label for="desc" class="col-sm-3">事件描述</label>
			<div class="col-sm-9">
				<input type="text" v-model="desc">
			</div>
		</div>
		<div class="form-group">
			<label for="date" class="col-sm-3">开始时间</label>
			<div class="col-sm-9">
				<input type="text" v-model="date">
			</div>
		</div>
		<div class="form-group">
			<button class="saveBtn" v-on:click="addPlan()">保存</button>
		</div>
	</form>
</template>

<style type="text/css">
	

</style>
<script type="text/javascript">
	export default{
		name: 'logTime',
		data () {
			return {
				useTime: 0,
				date: '',
				desc: ''
			}
		},
		methods: {
			addPlan () {
				const plan = {
					user: {
						userName: '小敏',
						imgSrc: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
					},
					date: this.date,
					desc: this.desc,
					useTime: this.useTime
				}
				this.$store.dispatch('addTotalTime', this.useTime)
				this.$store.dispatch('addPlan', plan)
				// console.log(this.$route)
				this.$router.go(-1)
			}
		}
	}
</script>
