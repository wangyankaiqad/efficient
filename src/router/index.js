import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: 'home'
	},
	{
		path: '/',
		component: login
	},
	// 大的页面  侧边栏
	{
		path: '/home-page',
		component: () => import('../components/home-page.vue'),
		/**首页 */
		children: [
			{
				path: '/home',
				component: () => import('../components/first-page.vue')
			},
			/**用户管理 */
			{
				path: '/user',
				component: () => import('../components/user-management.vue')
			},
			/**角色管理 */
			{
				path: '/role',
				component: () => import('../components/role-management.vue')
			},
			/**菜单管理 */
			{
				path: '/menus',
				component: () => import('../components/menu-Management.vue')
			}
		]
	}
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = new VueRouter({
	routes
})

export default router
