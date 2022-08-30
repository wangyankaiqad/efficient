<template>
	<div>
		<!-- 首页 -->
		<div class="header">
			<div class="left">
				<template>
					<el-table :data="datamore" border style="width: 100%">
						<el-table-column prop="agency" label="代办事项"> </el-table-column>
						<el-table-column prop="more" label="查看更多"> </el-table-column>
					</el-table>
				</template>
			</div>
			<div class="right">
				<div>
					<el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
				</div>
			</div>
		</div>
		<div class="middle">
			<div class="left">
				<div class="leftone">员工数据</div>
				<ul>
					<li class="li1">
						<p>员工总人数</p>
						<p>2000人</p>
					</li>
					<li>
						<p>正式员工</p>
						<p>2000人</p>
					</li>
					<li>
						<p>实习生</p>
						<p>2000人</p>
					</li>
					<li class="li4">
						<p>本月待入职</p>
						<p>2000人</p>
					</li>
					<li>
						<p>本月待离职</p>
						<p>2000人</p>
					</li>
					<li>
						<p>本月待转正</p>
						<p>2000人</p>
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="leftone">员工地区分布</div>
				<div id="main"></div>
			</div>
		</div>
		<div class="fotter">
			<div class="foote">员工生日</div>
			<div id="biao" class="biao"></div>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	data() {
		return {
			/**显示日期 */
			value1: '',
			datamore: [
				{
					agency: '[代办事项]您申请的报销还未审批，请及时查看，防止过期',
					more: '2022年8月'
				},
				{
					agency: '[代办事项]小红的请假申请还未审批，请及时查看',
					more: '2022年8月'
				},
				{
					agency: '[代办事项]小明的报销申请还未审批，请及时查看',
					more: '2022年8月'
				}
			]
		}
	},

	mounted() {
		var chartDom = document.getElementById('main')
		var myChart = echarts.init(chartDom)
		var option

		option = {
			title: {
				text: 'Referer of a Website',
				subtext: 'Fake Data',
				left: 'center'
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				right: 'left'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '50%',
					data: [
						{ value: 100, name: '东北' },
						{ value: 150, name: '内蒙' },
						{ value: 200, name: '河北' },
						{ value: 100, name: '山西' },
						{ value: 114, name: '河南' }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}

		option && myChart.setOption(option)

		let chartDom1 = document.getElementById('biao')
		let myChart1 = echarts.init(chartDom1)
		let option1

		option1 = {
			xAxis: {
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [100, 150, 225, 100, 135, 225, 150, 160, 200, 225, 225, 170],
					type: 'bar',
					itemStyle: {
						color: '#9932CD'
					}
				}
			]
		}

		option && myChart1.setOption(option1)
	},

	methods: {}
}
</script>

<style lang="scss" scoped>
.header {
	display: flex;

	.left {
		width: 70%;
		margin-right: 40px;
	}
}

.leftone {
	height: 50px;
	font-size: 20px;
	line-height: 50px;
	border-bottom: 1px solid black;
	padding-left: 20px;
}

.middle {
	margin-top: 30px;
	display: flex;
	justify-content: space-between;

	.left {
		width: 48%;
		height: 260px;
		border: 1px solid black;

		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			list-style: none;

			li {
				width: 30%;
				border-left: 1px solid black;
				text-align: center;
				height: 60px;
				margin-top: 30px;
				line-height: 30px;
			}

			.li1,
			.li4 {
				border-left: 0;
			}
		}
	}

	.right {
		width: 48%;
		height: 260px;
		border: 1px solid black;

		#main {
			width: 100%;
			height: 240px;
		}
	}
}

.fotter {
	margin-top: 30px;
	width: 100%;
	height: 230px;
	border: 1px solid black;

	.foote {
		height: 40px;
		border-bottom: 1px solid black;
		font-size: 20px;
		line-height: 40px;
		padding-left: 20px;
	}

	.biao {
		width: 100%;
		height: 100%;
	}
}
</style>
