// 页面权限模块}
import { asyncRoutes, publicRoutes } from '@/router'

export default {
  namespaced: true, // 这个细节不能忘记
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
      // 根据权限标识数组筛选路由对象
      const fRoutes = []
      menus.forEach(menu => {
        fRoutes.push(asyncRoutes.filter(route => route.name === menu)[0])
      })
      fRoutes.push({
        path: '/catchAll(.*)',
        redirect: '/404'
      })
      context.commit('setRoutes', fRoutes)
      return fRoutes
    }
  }
}
