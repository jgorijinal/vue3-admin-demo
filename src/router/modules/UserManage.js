import layout from '@/views/layout/index.vue'
export default {
  path: '/user',
  name: 'userManage',
  redirect: '/user/manage',
  component: layout,
  meta: {
    title: 'user',
    icon: 'user'
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('@/views/user-manage/index.vue'),
      meta: {
        title: 'userManage',
        icon: 'memo'
      }
    },
    {
      path: '/user/info/:id',
      name: 'userInfo',
      component: () => import('@/views/user-info/index.vue'),
      meta: {
        title: 'userInfo'
      }
    },
    {
      path: '/user/import',
      component: () => import('@/views/import/index.vue'),
      meta: {
        title: 'import'
      }
    }
  ]
}
