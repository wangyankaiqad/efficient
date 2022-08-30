const { defineConfig } = require('@vue/cli-service')
let port = 8888
// console.log(process.env)
/**
 * 第一步 ：打印process.env
 * 第二部：查看NODE_ENV
 */
// let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL
// console.log(target)

module.exports = defineConfig({
	// 第三方依赖是否需要转移，避免出现第三方的转移
	transpileDependencies: true,
	// 是否在开发环境下通过 eslint-loader 在每次保存时 lint代码，这个值会在@vue/cli-plugin-eslint 被安装之后生效
	lintOnSave: false,
	// 代理端口配置
	devServer: {
		// 代理的地址
		port,
		// 配置代理
		proxy: {
			// change xxx-api/login=>mock/login
			//detail:https://cli.vuejs.org/config/#devserver=proxy
			[process.env.VUE_APP_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL,
				// 开启跨域
				changeOrigin: true,
				// 开启重定向
				pathRewrite: {
					['^' + process.env.VUE_APP_API]: ''
				}
			}
		}
	}
})
