
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/mypage', component: () => import('pages/PageMyPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
