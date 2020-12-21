
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/', component: () => import('pages/PageMakeCodi.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/mypage', component: () => import('pages/PageProfile.vue') },
      { path: '/recommendations', component: () => import('pages/PageRecommendations.vue') },
      { path: '/outfitselect', component: () => import('pages/PageOutfitSelect.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
//   {
//     path: '/recommendations',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '/', component: () => import('pages/PageRecommendations.vue') },
//     ]
//   },
]

export default routes
