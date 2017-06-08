<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h1 class="">已用时长</h1>
		</div>
		<div class="panel-body">
			<h1 class="">{{totalTime}}</h1>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'sidebar',
		computed: {
			totalTime () {
				return this.$store.state.totalTime
			}
		}
	}

</script>
