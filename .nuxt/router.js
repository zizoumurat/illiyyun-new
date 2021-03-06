import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _793ada8c = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _30c614ce = () => interopDefault(import('../pages/photos/index.vue' /* webpackChunkName: "pages/photos/index" */))
const _46a2f0a0 = () => interopDefault(import('../pages/videos/index.vue' /* webpackChunkName: "pages/videos/index" */))
const _5fdcddc2 = () => interopDefault(import('../pages/videos/all/index.vue' /* webpackChunkName: "pages/videos/all/index" */))
const _b1e2ce1c = () => interopDefault(import('../pages/photos/detail/_imagId/index.vue' /* webpackChunkName: "pages/photos/detail/_imagId/index" */))
const _2974a968 = () => interopDefault(import('../pages/videos/watch/_videoId/index.vue' /* webpackChunkName: "pages/videos/watch/_videoId/index" */))
const _7ca81d1c = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _220f7d33 = () => interopDefault(import('../pages/photos/_pageId/index.vue' /* webpackChunkName: "pages/photos/_pageId/index" */))
const _15a829cd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _793ada8c,
    name: "blog"
  }, {
    path: "/photos",
    component: _30c614ce,
    name: "photos"
  }, {
    path: "/videos",
    component: _46a2f0a0,
    name: "videos"
  }, {
    path: "/videos/all",
    component: _5fdcddc2,
    name: "videos-all"
  }, {
    path: "/photos/detail/:imagId",
    component: _b1e2ce1c,
    name: "photos-detail-imagId"
  }, {
    path: "/videos/watch/:videoId",
    component: _2974a968,
    name: "videos-watch-videoId"
  }, {
    path: "/blog/:slug",
    component: _7ca81d1c,
    name: "blog-slug"
  }, {
    path: "/photos/:pageId",
    component: _220f7d33,
    name: "photos-pageId"
  }, {
    path: "/",
    component: _15a829cd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
