<template>
	<div>
		<!-- 主页 -->
		<el-container>
			<el-aside width="200px">
				<!-- 侧边栏 -->
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
					router
					unique-opened
				>
					<el-menu-item v-for="item in jequlist" :key="item.id" :index="item.path">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.name }}</span>
					</el-menu-item>
					<el-submenu v-for="item in dataList" :key="item.id" :index="item.path">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{ item.name }}</span>
						</template>
						<el-menu-item-group v-for="item1 in item.children" :key="item1.id">
							<el-menu-item :index="item1.path">{{ item1.name }}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<template>
						<div>
							<i class="el-icon-s-fold"></i>
						</div>
						<div class="right">
							<i class="el-icon-s-flag"></i>
							<i class="el-icon-message-solid"></i>
							<svg
								t="1661655757226"
								class="icon"
								viewBox="0 0 1026 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="1613"
								width="20"
								height="20"
							>
								<path
									d="M163.2 94.08a48 48 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m145.28 279.04a48 48 0 0 0 67.84 0 48 48 0 0 0 0-67.84L308.48 373.12z m-213.12-211.2l213.12 211.2 67.84-67.84-213.12-211.2-67.84 67.84zM95.36 859.52a48 48 0 0 0 67.84 68.48l-67.84-68.48z m280.96-142.72a48 48 0 0 0-67.84-68.48l67.84 68.48z m-213.12 211.2l213.12-211.2-67.84-68.48-213.12 211.2 67.84 68.48zM863.36 928a48 48 0 0 0 67.84-67.84l-67.84 67.84z m-143.36-279.04a47.36 47.36 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m211.2 211.2l-211.2-211.2-67.84 67.84 211.2 211.2 67.84-67.84zM929.28 161.92a48 48 0 0 0 0-67.84 49.28 49.28 0 0 0-68.48 0l68.48 67.84z m-279.68 143.36a48 48 0 0 0 0 67.84 49.28 49.28 0 0 0 68.48 0l-68.48-67.84z m211.2-211.2l-211.2 211.2 68.48 67.84 211.2-211.2-68.48-67.84z"
									fill="#445365"
									p-id="1614"
								></path>
								<path
									d="M704 80a48 48 0 0 0 0 96v-96zM896 128h48a48.64 48.64 0 0 0-48-48V128z m-48 192a48 48 0 0 0 96 0zM704 176h192v-96h-192v96zM849.28 128v192h96V128zM945.28 704a48 48 0 0 0-96 0zM896 896v48a48.64 48.64 0 0 0 48-48z m-192-48a48 48 0 0 0 0 96v-96zM849.28 704v192h96v-192z m46.72 144h-192v96h192v-96zM320 944a48 48 0 0 0 0-96v96zM128 896h-46.72a48 48 0 0 0 48 48V896z m48-192a48 48 0 0 0-96 0zM320 848H128v96h192v-96zM177.28 896v-192h-96v192zM81.28 320a48 48 0 0 0 96 0zM128 128v-48a48 48 0 0 0-46.72 48z m192 48a48 48 0 0 0 0-96v96zM177.28 320V128h-96v192zM128 176h192v-96H128v96z"
									fill="#445365"
									p-id="1615"
								></path>
							</svg>
							<div>
								<img src="../assets/12.png" style="width: 35px" />
								<span>超级管理员</span>
							</div>
						</div>
					</template>
				</el-header>
				<el-main>
					<!-- 跳转路由 -->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			/**侧边栏数据 */
			sidebar: [],
			/**截取的首页 */
			jequlist: [],
			/**截取剩下的所有的数据 */
			dataList: []
		}
	},

	mounted() {},

	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
	},
	created() {
		this.$http.get('/effect/user/menubars/').then((res) => {
			this.sidebar = res.data.cebianlan
			this.jequlist = this.sidebar.slice(0, 1)
			this.dataList = this.sidebar.slice(1)
		})
	}
}
</script>

<style lang="scss" scoped>
.el-menu {
	overflow: hidden;
}

.el-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid black;

	i {
		font-size: 20px;
		margin-right: 15px;
	}

	.right {
		display: flex;
		align-items: center;

		img {
			vertical-align: middle;
		}

		span {
			font-size: 12px;
		}
	}
}
</style>
