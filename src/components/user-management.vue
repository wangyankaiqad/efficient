<template>
	<div>
		<!--  系统管理-----》 用户管理 -->
		<div class="header">
			<div class="head">
				姓名:
				<el-input placeholder="请输入姓名"></el-input>
			</div>
			<div class="head">
				所属部门:
				<el-input placeholder="请输入部门"></el-input>
			</div>
			<div class="head">
				手机号:
				<el-input placeholder="请输入手机号"></el-input>
			</div>
		</div>
		<div class="nav">
			<div>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
			<div class="navtwo">
				<el-button type="primary" icon="el-icon-circle-plus-outline" class="userAdd" @click="dialogFormVisible = true"
					>新增用户</el-button
				>
			</div>
		</div>
		<div class="aside">
			<template>
				<el-table :data="tableData" stripe style="width: 100%">
					<el-table-column type="index" label="id"> </el-table-column>
					<el-table-column prop="name" label="用户名称"> </el-table-column>
					<el-table-column prop="name" label="账号"> </el-table-column>
					<el-table-column prop="name" label="手机号"> </el-table-column>
					<el-table-column prop="name" label="所属角色"> </el-table-column>
					<el-table-column prop="name" label="所属职级"> </el-table-column>
					<el-table-column prop="name" label="所属部门"> </el-table-column>
					<el-table-column prop="name" label="操作" width="300px">
						<template>
							<el-button size="mini" icon="el-icon-edit" type="success">修改</el-button>
							<el-button size="mini" icon="el-icon-delete-solid" type="danger">删除</el-button>
							<el-button size="mini" icon="el-icon-document-copy" type="primary">详情</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<div>
			<!-- 新增模态框 -->
			<el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="450px">
				<el-form :model="form">
					<el-form-item label="用户名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
					</el-form-item>
					<el-form-item label="账号" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
					</el-form-item>
					<el-form-item label="手机号" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
					</el-form-item>
					<el-form-item label="角色管理" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属岗位" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属职级" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属部门" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formLabelWidth: '100px',
			dialogFormVisible: false,
			tableData: [
				{
					name: '123123'
				}
			],
			form: {
				name: ''
			}
		}
	},

	mounted() {},

	methods: {}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;

	.head {
		width: 100%;
		// background-color: red;
		display: flex;
		line-height: 40px;
		font-size: 18px;

		.el-input {
			width: 70%;
			margin-left: 10px;
		}
	}
}

.nav {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	.userAdd {
		margin-right: 50px;
	}
}
</style>
