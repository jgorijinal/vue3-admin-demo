import layout from '@/views/layout/index.vue'
export default {
  path: '/article',
  name: 'articleRanking',
  redirect: '/article/ranking',
  component: layout,
  children: [
    {
      path: '/article/ranking',
      component: () => import('@/views/article-ranking/index.vue'),
      meta: {
        title: 'articleRanking',
        icon: 'rank'
      }
    },
    {
      path: '/article/:id',
      component: () => import('@/views/article-detail/index.vue'),
      meta: {
        title: 'articleDetail'
      }
    }
  ]
}
