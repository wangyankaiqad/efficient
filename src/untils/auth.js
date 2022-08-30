// 引入js-cookie
import Cookies from 'js-cookie'

const TokenKey = 'token'

// 存储
export function getToken() {
	return Cookies.get(TokenKey)
}

// 获取
export function setToken(val) {
	Cookies.set(TokenKey, val)
}
// 删除
export function removeToken() {
	Cookies.remove(TokenKey)
}
