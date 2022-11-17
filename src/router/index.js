import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
// 私有路由
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleRanking from './modules/ArticleRanking'
import ArticleCreate from './modules/ArticleCreate'

// 私有路由表
export const asyncRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  ArticleRanking,
  ArticleCreate
]
// 静态路由表
export const publicRoutes = [
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      {
        path: '/profile',
        name: 'profile',
        meta: {
          title: 'profile',
          icon: 'place'
        },
        component: () => import('@/views/profile/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes]
})

export default router
