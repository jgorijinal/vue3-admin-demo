import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
// 私有路由
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleRanking from './modules/ArticleRanking'
import ArticleCreate from './modules/ArticleCreate'

// 私有路由表
const asyncRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  ArticleRanking,
  ArticleCreate
]
// 静态路由表
const publicRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
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
  routes: [...asyncRoutes, ...publicRoutes]
})

export default router
