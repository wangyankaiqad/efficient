<template>
	<div>
		<!--  系统管理-----》 角色管理 -->
		<div class="header">
			<div class="head">
				姓名:
				<el-input placeholder="请输入姓名"></el-input>
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
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
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<div>
			<!-- 新增模态框 -->
			<el-dialog title="新增角色" :visible.sync="dialogFormVisible" width="450px">
				<el-form :model="form">
					<el-form-item label="角色名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off" style="width: 222px"></el-input>
					</el-form-item>
					<el-form-item label="备注" :label-width="formLabelWidth">
						<!-- 级联选择器 -->
						<div class="block">
							<el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
						</div>
					</el-form-item>
					<el-form-item label="备注" :label-width="formLabelWidth">
						<el-input type="textarea" style="width: 222px"></el-input>
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
			},
			// 级联选择器
			options: [
				{
					value: 'zhinan',
					label: '指南',
					children: [
						{
							value: 'shejiyuanze',
							label: '设计原则',
							children: [
								{
									value: 'yizhi',
									label: '一致'
								},
								{
									value: 'fankui',
									label: '反馈'
								},
								{
									value: 'xiaolv',
									label: '效率'
								},
								{
									value: 'kekong',
									label: '可控'
								}
							]
						},
						{
							value: 'daohang',
							label: '导航',
							children: [
								{
									value: 'cexiangdaohang',
									label: '侧向导航'
								},
								{
									value: 'dingbudaohang',
									label: '顶部导航'
								}
							]
						}
					]
				},
				{
					value: 'zujian',
					label: '组件',
					children: [
						{
							value: 'basic',
							label: 'Basic',
							children: [
								{
									value: 'layout',
									label: 'Layout 布局'
								},
								{
									value: 'color',
									label: 'Color 色彩'
								},
								{
									value: 'typography',
									label: 'Typography 字体'
								},
								{
									value: 'icon',
									label: 'Icon 图标'
								},
								{
									value: 'button',
									label: 'Button 按钮'
								}
							]
						},
						{
							value: 'form',
							label: 'Form',
							children: [
								{
									value: 'radio',
									label: 'Radio 单选框'
								},
								{
									value: 'checkbox',
									label: 'Checkbox 多选框'
								},
								{
									value: 'input',
									label: 'Input 输入框'
								},
								{
									value: 'input-number',
									label: 'InputNumber 计数器'
								},
								{
									value: 'select',
									label: 'Select 选择器'
								},
								{
									value: 'cascader',
									label: 'Cascader 级联选择器'
								},
								{
									value: 'switch',
									label: 'Switch 开关'
								},
								{
									value: 'slider',
									label: 'Slider 滑块'
								},
								{
									value: 'time-picker',
									label: 'TimePicker 时间选择器'
								},
								{
									value: 'date-picker',
									label: 'DatePicker 日期选择器'
								},
								{
									value: 'datetime-picker',
									label: 'DateTimePicker 日期时间选择器'
								},
								{
									value: 'upload',
									label: 'Upload 上传'
								},
								{
									value: 'rate',
									label: 'Rate 评分'
								},
								{
									value: 'form',
									label: 'Form 表单'
								}
							]
						},
						{
							value: 'data',
							label: 'Data',
							children: [
								{
									value: 'table',
									label: 'Table 表格'
								},
								{
									value: 'tag',
									label: 'Tag 标签'
								},
								{
									value: 'progress',
									label: 'Progress 进度条'
								},
								{
									value: 'tree',
									label: 'Tree 树形控件'
								},
								{
									value: 'pagination',
									label: 'Pagination 分页'
								},
								{
									value: 'badge',
									label: 'Badge 标记'
								}
							]
						},
						{
							value: 'notice',
							label: 'Notice',
							children: [
								{
									value: 'alert',
									label: 'Alert 警告'
								},
								{
									value: 'loading',
									label: 'Loading 加载'
								},
								{
									value: 'message',
									label: 'Message 消息提示'
								},
								{
									value: 'message-box',
									label: 'MessageBox 弹框'
								},
								{
									value: 'notification',
									label: 'Notification 通知'
								}
							]
						},
						{
							value: 'navigation',
							label: 'Navigation',
							children: [
								{
									value: 'menu',
									label: 'NavMenu 导航菜单'
								},
								{
									value: 'tabs',
									label: 'Tabs 标签页'
								},
								{
									value: 'breadcrumb',
									label: 'Breadcrumb 面包屑'
								},
								{
									value: 'dropdown',
									label: 'Dropdown 下拉菜单'
								},
								{
									value: 'steps',
									label: 'Steps 步骤条'
								}
							]
						},
						{
							value: 'others',
							label: 'Others',
							children: [
								{
									value: 'dialog',
									label: 'Dialog 对话框'
								},
								{
									value: 'tooltip',
									label: 'Tooltip 文字提示'
								},
								{
									value: 'popover',
									label: 'Popover 弹出框'
								},
								{
									value: 'card',
									label: 'Card 卡片'
								},
								{
									value: 'carousel',
									label: 'Carousel 走马灯'
								},
								{
									value: 'collapse',
									label: 'Collapse 折叠面板'
								}
							]
						}
					]
				},
				{
					value: 'ziyuan',
					label: '资源',
					children: [
						{
							value: 'axure',
							label: 'Axure Components'
						},
						{
							value: 'sketch',
							label: 'Sketch Templates'
						},
						{
							value: 'jiaohu',
							label: '组件交互文档'
						}
					]
				}
			]
		}
	},

	mounted() {},

	methods: {
		handleChange() {}
	}
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
