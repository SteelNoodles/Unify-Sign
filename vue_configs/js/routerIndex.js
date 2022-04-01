
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    console.log('savedPosition', savedPosition)
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
  },
  routes: [
    { path: '/', component: Index, meta: { index: 0 } },
    { path: '/basic/lock', component: LockConfig, meta: { index: 1 } },
    { path: '/basic/sign', component: SignConfig, meta: { index: 1 } },
    { path: '/basic/sign/dingdong', component: DingDongConfig, meta: { index: 2 } },
    { path: '/basic/floaty', component: FloatyConfig, meta: { index: 1 } },
    { path: '/basic/log', component: LogConfig, meta: { index: 1 } },
    { path: '/advance/skipPackage', component: SkipPackageConfig, meta: { index: 1 } },
    { path: '/advance/common', component: AdvanceCommonConfig, meta: { index: 1 } },
    { path: '/about', component: About, meta: { index: 1 } },
    { path: '/about/develop', component: DevelopConfig, meta: { index:2, title: '开发模式' } },
  ]
})

