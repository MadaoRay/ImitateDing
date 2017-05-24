<template>
	<div>
		<header>
			<span style="position:fixed;left:10px;top:5px;">
				<img :src="img" height="21" width="21">
			</span>
			<span class="title">上海彦集电子商务有限公司</span>
		</header>
		<div style="margin-top:10px;border-top:1px solid #ccc;" class="main-func">
			<div class="func">
				<router-link to="/">
					<div style="border:1px solid #ccc;border-radis:20%;padding:20px;">0</div>
					<div>待我审批</div>
				</router-link>
			</div>
			<div class="func">
				<router-link to="/">
					<div style="border:1px solid #ccc;border-radis:20%;padding:20px;">0</div>
					<div>待我审批</div>
				</router-link>
			</div>
			<div class="func">
				<router-link to="/">
					<div style="border:1px solid #ccc;border-radis:20%;padding:20px;">0</div>
					<div>待我审批</div>
				</router-link>
			</div>
		</div>
		<footer style="position:fixed;bottom:0;">
			<router-link to="message">消息</router-link>
			<router-link to="ding">DING</router-link>
			<router-link to="work">工作</router-link>
			<router-link to="contact">联系人</router-link>
			<router-link to="mine">我的</router-link>
		</footer>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'work',
	data(){
	   return{
		img:require('../assets/imgs/alarm.png')
	   }
	}
}
</script>

<style type="text/css" scoped>
header{
text-align: center;
    margin-top: 5px;
}
</style>

<style lang="scss">
@mixin text-center{
	text-align: center;
}

body{
	max-width:640px;
	margin:0 auto;
	font-size:0.8rem
}

footer a{
	display: table-cell;
	width:1%;
	@include text-center;
}

a{
	text-decoration:none;
	color:#707275;
	font-size:0.6rem;
}

.title{
	margin-top:5px;
}

.main-func .func{
	display: table-cell;
	width:1%;
}
</style>
