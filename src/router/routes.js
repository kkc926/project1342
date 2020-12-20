
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/codi', component: () => import('pages/PageCodi.vue') },
      { path: '/friendlist', component: () => import('pages/PageFriendList.vue') },
      { path: '/friendsearch', component: () => import('pages/PageFriendSearch.vue') },
      { path: '/mypage', component: () => import('pages/PageProfile.vue') },
      { path: '/recommendations', component: () => import('pages/PageRecommendations.vue') },
      { path: 'recommendations/1st', component: () => import('components/reco/1st.vue') },
      { path: 'recommendations/1st', component: () => import('components/reco/1st.vue') },
      { path: 'recommendations/2nd', component: () => import('components/reco/2nd.vue') },
      { path: 'recommendations/3rd', component: () => import('components/reco/3rd.vue') },
      { path: 'recommendations/4th', component: () => import('components/reco/4th.vue') },


      
      // { path: '/profile', component: () => import('pages/Profile.vue') }
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
