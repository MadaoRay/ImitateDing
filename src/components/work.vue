<template>
	<div>
		<header>
			<span style="float:left;padding-left:5px;">
				<img :src="img" height="21" width="21">
			</span>
			<span class="title">上海彦集电子商务有限公司</span>
		</header>
		<div class="main-func">
			<div class="func">
				<router-link to="/">
					<div>
						<div>
							<!-- <div class="examine">0</div> -->
						<img src="../assets/imgs/examine.png" height="20" width="20">
							<!-- <img src="../assets/imgs/holiday.png" height="20" width="20">						 -->
						</div>
						<div>待我审批</div>
					</div>
				</router-link>
			</div>
			<div class="func border">
				<router-link to="/">
					<div>
						<img src="../assets/imgs/holiday.png" height="20" width="20">
					</div>
					<div>请假</div>
				</router-link>
			</div>
			<div class="func">
				<router-link to="/">
					<div>
						<img src="../assets/imgs/dailyReport.png" height="20" width="20">
					</div>
					<div>日报</div>
				</router-link>
			</div>
		</div>
		<div style="margin-top:1rem;border-top:1px solid #ddd;">
			<div style="font-size:0.7rem">常用应用</div>
			<div style="border-top:1px solid #ddd;border-bottom:1px solid #ddd;" class="regular-func">
				<div>
					<div class="func">
						<router-link to="/">
							<div>
								<div>
								<img src="../assets/imgs/information.png" height="20" width="20" class="func-img bgc-blue">
								</div>
								<div>公告</div>
							</div>
						</router-link>
					</div>
					<div class="func border">
						<router-link to="/">
							<div>
								<img src="../assets/imgs/log.png" height="20" width="20" class="func-img bgc-blue">
							</div>
							<div>日志</div>
						</router-link>
					</div>
					<div class="func">
						<router-link to="/">
							<div>
								<img src="../assets/imgs/cloud.png" height="20" width="20" class="func-img bgc-blue">
							</div>
							<div>云盘</div>
						</router-link>
					</div>
				</div>
				<div>
					<div class="func">
						<router-link to="/">
							<div>
								<div>
								<img src="../assets/imgs/sign.png" height="20" width="20" class="func-img bgc-orange">
								</div>
								<div>签到</div>
							</div>
						</router-link>
					</div>
					<div class="func border">
						<router-link to="/">
							<div>
								<img src="../assets/imgs/pocket.png" height="20" width="20" class="func-img bgc-red">
							</div>
							<div>红包</div>
						</router-link>
					</div>
					<div class="func">
						<router-link to="/">
							<div>
								<img src="../assets/imgs/approve.png" height="20" width="20" class="func-img bgc-orange">
							</div>
							<div>审批</div>
						</router-link>
					</div>
				</div>
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
.text-center{
	text-align: center;
}

.bgc-blue{
	background-color: #008CEE;
}

.bgc-orange{
	background-color: #EA9526;
}

.bgc-red{
	background-color: #EA2626;
}

body{
	max-width:640px;
	margin:0 auto;
	font-size:0.8rem
}

footer a{
	display: table-cell;
	width:1%;
	@extend .text-center;
}

a{
	text-decoration:none;
	color:#707275;
	font-size:0.6rem;
}

.title{
	margin-top:5px;
}

.main-func{	
	padding: 15px;
	margin-top:10px;
	border-top:1px solid #ddd;
	border-bottom:1px solid #ddd;
}

.main-func .func{
	display: table-cell;
	width:1%;	
	@extend .text-center
}

.main-func .func a img{
	border:1px solid #ccc;
	padding:5px;
	border-radius:20%;
}

.main-func .border{
	border-style:solid;
	border-width:0 1px;
	border-color:#ddd;
}

.examine{
	height:20px;
	width:20px;    
	margin: 0 auto;
}

.regular-func .func{
	display: table-cell;
	width:1%;
	@extend .text-center;
	padding:15px;
}

.regular-func .func .func-img{
	padding:5px;
	border-radius:20%;
}

.regular-func .border{
	border-style:solid;
	border-width:0 1px;
	border-color:#ddd;
}
</style>
