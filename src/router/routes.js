
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      // { path: '/mypage', component: () => import('pages/PageMyPage.vue') },
      // { path: '/mypage/jacket', component: () => import('pages/item/jacket.vue') },
      // { path: '/mypage/pants', component: () => import('pages/PageMyPage.vue') },
      // { path: '/mypage/onepiece', component: () => import('pages/PageMyPage.vue') },
      // { path: '/mypage/tshirt', component: () => import('pages/PageMyPage.vue') },
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
    component: () => import('layouts/MyPageLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageMyPage.vue') },
      { path: '/mypage/jacket', component: () => import('pages/item/jacket.vue') },
      { path: '/mypage/pants', component: () => import('pages/item/pants.vue') },
      { path: '/mypage/onepiece', component: () => import('pages/item/onepiece.vue') },
      { path: '/mypage/tshirt', component: () => import('pages/item/tshirt.vue') },
    ]
  },
]

export default routes
