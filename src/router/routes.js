
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/', component: () => import('pages/PageMakeCodi.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/mypage', component: () => import('pages/PageProfile.vue') },
      { path: '/recommendations', component: () => import('pages/PageRecommendations.vue') },
      { path: '/outfitselect', component: () => import('pages/PageOutfitSelect.vue') }
      // { path: '/profile', component: () => import('pages/Profile.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/mypage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageMyPage.vue') },
      { path: '/mypage/jacket', component: () => import('components/item/jacket.vue') },
      { path: '/mypage/pants', component: () => import('components/item/pants.vue') },
      { path: '/mypage/onepiece', component: () => import('components/item/onepiece.vue') },
      { path: '/mypage/tshirt', component: () => import('components/item/tshirt.vue') },
    ]
  },
]

export default routes
