const { defineConfig } = require('@vue/cli-service')
let port = 8888
console.log(process.env)
/**
 * 第一步 ：打印process.env
 * 第二部：查看NODE_ENV
 */
let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL
console.log(target)

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
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_API]: ''
				}
			}
		}
	}
})

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// 	transpileDependencies: true,
// 	lintOnSave: false,
// 	productionSourceMap: false,
// 	publicPath: './',//根目录
// 	outputDir: 'dist',//输出文件地址
// 	assetsDir: 'static',//静态资源文件放置
// 	devServer: {
// 		port: 8089,//端口号
// 		https: false,
// 		host: '0.0.0.0',
// 		open: true,
// 		// 配置代理
// 		proxy: {
// 			'/api': {
// 				changerOrigin: true,
// 				target: 'http://www.baidu.com',
// 				pathRewrite: {
// 					'/api': ''
// 				}
// 			}
// 		}
// 	}
// })
