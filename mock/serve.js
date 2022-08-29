// 引入express
let express = require('express')
// 引入mock
let Mock = require('mockjs')

const loginData = require('./common/login.json')
const loginRead = require('./common/loginRead.json')
// 实例化express
let app = express()
// 登录接口
app.use('/user/login/', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录成功',
			loginData
		})
	)
})
// 登录日志
app.use('/home/loginsearch/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录成功',
			loginRead
		})
	)
})
app.listen('9999', () => {
	console.log('监听端口 9999')
})
