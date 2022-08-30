// 引入axios
import axios from 'axios'
import { getToken } from './auth'
// import router from '@/router'
import { MessageBox } from 'element-ui'
//创建axios实例
const http = axios.create({
	baseURL: '/',
	timeout: 5000,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
		// 'Content-Type': 'multipart/form-data'
	}
})

//请求拦截
http.interceptors.request.use(
	// 成功的回调函数
	(config) => {
		config.headers['token'] = getToken()
		return config
	}, //失败的回调函数
	(error) => {
		return Promise.reject(error)
	}
)

//响应拦截
http.interceptors.response.use(
	//成功的回调
	(response) => {
		// if (response.data && response.data.status === 2) {
		// 	// removeToken()
		// 	router.push({
		// 		name: 'login'
		// 	})
		// }
		return response
	},
	(error) => {
		let title = ''
		let message = ''
		if (error && error.response) {
			message = error.response.data.message
			// if (error.response.data.status === 2) {
			// 	router.push({
			// 		name: 'login'
			// 	})
			// }
			switch (error.response.status) {
				case 400:
					title = '错误请求'
					break
				case 401:
					title = '资源未授权'
					break
				case 403:
					title = '禁止访问'
					break
				case 404:
					title = '未找到所请求的资源'
					break
				case 405:
					title = '不允许使用该方法'
					break
				case 408:
					title = '请求超时'
					break
				case 500:
					title = '内部服务器错误'
					break
				case 501:
					title = '未实现'
					break
				case 502:
					title = '网关错误'
					break
				case 503:
					title = '服务不可用'
					break
				case 504:
					title = '网关超时'
					break
				case 505:
					title = 'HTTP版本不受支持'
					break
				default:
					title = error.response.status
			}
			return MessageBox.alert(message, title, {
				type: 'warning'
			})
		} else {
			return MessageBox.alert('请联系系统管理员, 或稍后再试!', '未知错误', {
				type: 'error'
			})
		}
	}
)

export default http
