import layout from '@/views/layout/index.vue'

export default {
  path: '/user',
  redirect: '/user/manage',
  name: 'permissionList',
  component: layout,
  meta: {
    title: 'user',
    icon: 'user'
  },
  children: [
    {
      path: '/user/permission',
      component: () => import('@/views/permission-list/index.vue'),
      meta: {
        title: 'permissionList',
        icon: 'finished'
      }
    }
  ]
}
