// 页面权限模块
import { asyncRoutes, publicRoutes } from '@/router'
export default {
  namespaced: true,
  state () {
    return {
      routes: []
    }
  },
  mutations: {
    setRoutes (state, routes) {
      state.routes = [...publicRoutes, ...routes]
    }
  },
  actions: {
    filterRoutes (context, menus) {
      const routes = [] // 需要动态添加的路由对象
      console.log(menus)
      menus.forEach(menu => {
        routes.push(asyncRoutes.filter(routeObj => routeObj.name === menu)[0])
      })
      // 最后要加上这些 /:catchAll(.*) 这个要最后加上
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      console.log(routes)
      context.commit('setRoutes', routes)
      // 最后要 return 返回, 因为在前置守卫里面用 addRoute 添加到路由表里面
      return routes
    }
  }
}
