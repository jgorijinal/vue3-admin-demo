// 登录鉴权
import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 正常通行
      if (JSON.stringify(store.getters.userInfo) === '{}') {
        // 获取用户资料
        const userInfo = await store.dispatch('user/getUserInfoAction')

        const filterRoutes = await store.dispatch('permission/filterRoutes', userInfo.permission.menus)
        filterRoutes.forEach(route => {
          router.addRoute(route)
        })
        next(to.path)
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
