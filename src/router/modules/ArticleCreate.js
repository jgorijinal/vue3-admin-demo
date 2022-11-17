import layout from '@/views/layout/index.vue'
export default {
  path: '/article',
  redirect: '/article/ranking',
  name: 'articleCreate',
  component: layout,
  meta: { title: 'article', icon: 'document' },
  children: [
    {
      path: '/article/create',
      component: () => import('@/views/article-create/index.vue'),
      meta: {
        title: 'articleCreate',
        icon: 'documentAdd'
      }
    },
    {
      path: '/article/editor/:id',
      component: () => import('@/views/article-create/index.vue'),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
