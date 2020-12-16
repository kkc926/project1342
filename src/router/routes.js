
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/camera', component: () => import('pages/PageCamera.vue') },
<<<<<<< HEAD
      { path: '/profile', component: () => import('pages/PageProfile.vue') }
=======
      { path: '/profile', component: () => import('pages/Profile.vue') }
>>>>>>> 4fab4493eb52cfbece8232cdec8b53f724472836
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
