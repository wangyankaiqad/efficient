<template>
	<div class="background">
		<!-- 登录页面 -->
		<div class="Sign_in">
			<div class="header">OA系统登录</div>
			<div class="middle">
				<el-form ref="form" :model="form" :rules="rules">
					<el-form-item prop="user_name">
						<el-input
							v-model="form.user_name"
							style="width: 80%"
							placeholder="请输入用户名"
							prefix-icon="el-icon-user-solid"
						></el-input>
					</el-form-item>
					<div style="height: 18px"></div>
					<el-form-item prop="password">
						<el-input v-model="form.password" style="width: 80%" placeholder="请输入密码" prefix-icon="el-icon-s-goods">
						</el-input>
					</el-form-item>
					<div class="steganoGram">
						<el-button type="text" class="steganoGramPass" @click="dialogFormVisible = true">忘记密码 </el-button>
					</div>
					<el-form-item>
						<el-input style="width: 45%; margin-right: 33px" placeholder="验证码"></el-input>
						<el-button class="buttonCode">获取验证码</el-button>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="onSubmit" style="width: 76%">登录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<el-dialog title="修改密码" :visible.sync="dialogFormVisible" :append-to-body="true" width="500px">
			<el-form :model="form">
				<el-form-item label="用户名:" :label-width="formLabelWidth">
					<el-input v-model="form.user_name" autocomplete="off" style="width: 80%" placeholder="请输入用户名">
					</el-input>
				</el-form-item>
				<el-form-item label="新密码:" :label-width="formLabelWidth">
					<el-input v-model="form.password" autocomplete="off" style="width: 80%" placeholder="请输入新密码">
					</el-input>
				</el-form-item>
				<el-form-item label="再次输入:" :label-width="formLabelWidth">
					<el-input v-model="form.password2" autocomplete="off" style="width: 80%" placeholder="再次输入密码">
					</el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="ForgotPassword">确 定</el-button>
			</div>
		</el-dialog>
		<!-- <p class="footer">©2022美团版权所有京ICP证070791号京公网安备11010502025545号</p> -->
	</div>
</template>

<script>
import axios from 'axios'
export default {
	created() {
		// const loginInfo = {
		// 	name: '小红',
		// 	password: '123',
		// 	code: 123
		// }

		axios.get('/effect/home/loginsearch').then((res) => {
			console.log(res, '登录日志')
		})
	},

	data() {
		return {
			formLabelWidth: '120px',
			/**登录 */
			form: {
				user_name: '',
				password: ''
			},
			/**图片 */
			imgsms: '',
			/**找回密码 */
			formPass: { user_name: '', password: '', password2: '' },
			dialogFormVisible: false,
			rules: {
				user_name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},

	mounted() {},

	methods: {
		/**登录 */
		onSubmit() {
			this.$refs.form.validate((aa) => {
				if (!aa) return

				axios.post('/effect/user/login', this.form).then((res) => {
					console.log(res)
					if (res.data.status == 200) {
						// 跳转到主页面
						this.$router.push('/home-page')
					}
				})
			})
		},
		/**修改的确定按钮方法 */
		ForgotPassword() {}
	}
}
</script>

<style lang="scss" scoped>
.background {
	background: url(../assets/login.png);
	background-position: center;
	height: 100%;
	width: 100%;
	background-size: cover;
	position: fixed;

	.Sign_in {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 400px;
		height: 400px;
		border-radius: 50px;
		background-color: #fff;

		.middle {
			text-align: center;
		}

		.header {
			font-size: 30px;
			height: 100px;
			line-height: 100px;
			text-align: center;
		}
	}
}

::v-deep .el-input__inner {
	padding-left: 30px;
	border-radius: 15px;
}

.buttonCode {
	border-radius: 15px;
}

.steganoGram {
	width: 80%;
	margin: auto;
	height: 40px;
	margin-top: -30px;

	.steganoGramPass {
		float: right;
		color: orange;
	}
}

.footer {
	width: 100%;
	position: absolute;
	font-size: 12px;
	bottom: 50px;
	text-align: center;
}

::v-deep .el-form-item__error {
	left: 50px;
}
</style>
