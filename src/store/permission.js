// 页面权限模块}
import { asyncRoutes, publicRoutes } from '@/router'
export default {
  namespaced: true,
  state () {
    return {
      routes: []
    }
  },
  mutations: {
    setRoutes (state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes (context, menus) {
      // 筛选出来的私有路由
      const routes = []
      menus.forEach((menu) => {
        routes.push(asyncRoutes.filter(route => route.name === menu)[0])
      })
      // 在 routes 最后面添加 404
      routes.push({
        path: '/catchAll(.*)',
        redirect: '/404'
      })
      context.commit('setRoutes', routes)
      // 最后返回
      return routes
    }
  }
}
