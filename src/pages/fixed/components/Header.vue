<template>
	<div class="wrapper header-wrapper">
		<!-- logo左边图标start  -->
		<div class="logo">
			<img src="@/assets/images/fixed/logo.png" alt="请稍等...">
		</div>
		<!-- logo左边图标end  -->
		<!-- search搜索框start -->
		<div class="search">
			<input class="search-input" type="text" placeholder="请输入您想要的内容">
			<router-link to="/main/search">
				<span class="iconfont search-icon">&#xe6a2;</span>
			</router-link>
		</div>
		<!-- search搜索框end -->
		<!-- vip用户交互start -->
		<div class="vip">
			<router-link target="_blank" to="/supplement/vip" class="vip-link">
				会员
			</router-link>
			<div class="vip-interaction">
				<!-- login未登录注册前start -->
				<div class="vip-login-register">
					<span class="vip-login" @click="showLogin">登录</span>
					<span>|</span>
					<span class="vip-register" @click="showRegister">注册</span>
				</div>
				<!-- login未登录注册前end -->
				<!-- user登录注册后start -->
				<div class="vip-user">
					<img class="vip-user-photo" src="@/assets/images/fixed/uesr-photo.jpg" alt="请稍等......">
					<span class="vip-username">李明</span>
				</div>
				<!-- user登录注册后end -->
			</div>
		</div>
		<!-- vip用户交互end -->
		<!-- dialog对话弹框start -->
		<DialogMask v-show="isShowLoginMask"/>
		<DialogMask v-show="isShowRegisterMask"/>
		<DialogLogin v-show="isShowLogin" @hideLogin="hideLogin" @showLoginRegister="showLoginRegister"/>
		<DialogRegister v-show="isShowRegister" @hideRegister="hideRegister"/>
		<!-- dialog对话弹框end -->
	</div>
</template>

<script>
import DialogMask from '../../dialog/mask'
import DialogLogin from '../../dialog/login'
import DialogRegister from '../../dialog/register'
export default {
	name: 'FixedHeader',
	components: {
		DialogMask,
		DialogLogin,
		DialogRegister
	},
	data () {
		return {
			// 引入两次遮罩层是因为需要实现在登录弹框里点击显示注册弹框时，只显示一层遮罩层，当关闭注册弹框时，不关闭遮罩层
			/**
			 * 是否显示登录弹框遮罩层判断值
			 */
			isShowLoginMask: false,
			/**
			 * 是否显示注册弹框遮罩层判断值
			 */
			isShowRegisterMask: false,
			/**
			 * 是否显示登录弹框判断值
			 */
			isShowLogin: false,
			/**
			 * 是否显示注册弹框判断值
			 */
			isShowRegister: false
		}
	},
	methods: {
		/**
		 * 显示登录弹框方法
		 */
		showLogin () {
			this.isShowLoginMask = true
			this.isShowLogin = true
		},
		/**
		 * 隐藏登录弹框方法
		 * 作用于子组件DialogLogin
		 */
		hideLogin () {
			this.isShowLoginMask = false
			this.isShowLogin = false
		},
		/**
		 * 显示注册弹框方法
		 */
		showRegister () {
			this.isShowRegisterMask = true
			this.isShowRegister = true
		},
		/**
		 * 隐藏注册弹框方法
		 * 作用于子组件DialogRegister
		 */
		hideRegister () {
			this.isShowRegisterMask = false
			this.isShowRegister = false
		},
		/**
		 * 登录弹框内显示注册弹框方法
		 * 作用于子组件DialogLogin
		 */
		showLoginRegister () {
			this.isShowRegister = true
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "~styles/variables.sass";
	.header-wrapper {
		display: flex;
		line-height: 1.66rem;
		padding: 23px 0;
		.logo {
			float: left;
		}
		.search {
			flex: 1;
			margin-left: 16.7%;
			position: relative;
			.search-input {
				width: 6.62rem;
				height: 34px;
				font-size: 14px;
				padding-left: .34rem;
				background: #f5f5f5;
				border: 1px solid #e03131;
				border-top-left-radius: 18px;
				border-bottom-left-radius: 18px;
			}
			.search-icon {
				cursor: pointer;
				display: inline-block;
				width: .9rem;
				height: 36px;
				color: #fff;
				font-size: 30px;
				line-height: 36px;
				background: #e03131;
				border-top-right-radius: 18px;
				border-bottom-right-radius: 18px;
				padding-left: .26rem;
				position: absolute;
				top: 24.5px;
			}
		}
		.vip {
			float: right;
			margin-right: 1%;
			position: relative;
			.vip-link {
				cursor: pointer;
				color: #333;
				font-size: 16px;
				background: url("~images/fixed/vip.jpg") right center no-repeat;
				margin: 0 136px;
				padding-right: 56px;
				@include transition;
				&:hover {
					color: #f00;
				}
			}
			.vip-interaction {
				float: right;
				line-height: 0;
				// 登录前“登录|注册”显示样式
				.vip-login-register {
					// display: none;
					width: 100px;
					padding: 15px 0px;
					color: #fff;
					font-size: 14px;
					text-align: center;
					border-radius: 20px;
					background: rgb(217, 0, 0);
					position: absolute;
					top: 26px;
					right: 0;
					.vip-login, .vip-register {
						cursor: pointer;
						font-weight: normal;
						@include transition;
						&:hover {
							font-weight: bold;
						}
					}
				}
				// 登录后用户名显示样式
				.vip-user {
					display: none;
					width: 100px;
					padding: 15px 0px;
					position: absolute;
					top: 26px;
					right: 0;
					.vip-username {
						cursor: pointer;
						color: $bgColor;
						font-size: 18px;
						position: absolute;
						top: 15px;
						right: 25px;
						@include transition;
						&:hover {
							text-decoration: underline;
						}
					}
					.vip-user-photo {
						width: 30px;
						height: 30px;
						border-radius: 50%;
						position: absolute;
						top: 0;
					}
				}
			}
		}
		@media only screen and (max-width: 1200px) {
			.search {
				margin-left: 9%;
			}
			.vip > .vip-link  {
				margin: 0 100px;
			}
		}
	}
	@media only screen and (max-width: 1000px) {
		.header-wrapper {
			display: none;
		}
	}
</style>
