<template>
	<div>
		<!--  系统管理-----》 角色管理 -->
		<div class="header">
			<div class="head">
				菜单名称:
				<el-input placeholder="请输入姓名"></el-input>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
				<el-button type="primary" icon="el-icon-circle-plus-outline" class="userAdd" @click="dialogFormVisible = true"
					>新增菜单</el-button
				>
			</div>
		</div>
		<div class="middle">
			<!-- 树形表格 -->
			<el-table
				:data="tableData"
				style="width: 100%; margin-bottom: 20px"
				row-key="id"
				border
				default-expand-all
				:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
			>
				<el-table-column prop="date" label="日期" sortable width="180"> </el-table-column>
				<el-table-column prop="name" label="姓名" sortable width="180"> </el-table-column>
				<el-table-column prop="address" label="地址"> </el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					children: [
						{
							id: 31,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						},
						{
							id: 32,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						}
					]
				}
			]
		}
	},

	mounted() {},

	methods: {}
}
</script>

<style lang="scss" scoped>
.header {
	.head {
		display: flex;
		height: 40px;
		line-height: 40px;
		font-size: 18px;

		.el-input {
			margin-left: 10px;
			width: 222px;
			margin-right: 20px;
		}
	}
}
</style>
