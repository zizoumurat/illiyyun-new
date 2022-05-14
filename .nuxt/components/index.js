export const CommentItem = () => import('../../components/video/CommentItem.vue' /* webpackChunkName: "components/comment-item" */).then(c => wrapFunctional(c.default || c))
export const HorizontalVideoCard = () => import('../../components/video/HorizontalVideoCard.vue' /* webpackChunkName: "components/horizontal-video-card" */).then(c => wrapFunctional(c.default || c))
export const InsertComment = () => import('../../components/video/InsertComment.vue' /* webpackChunkName: "components/insert-comment" */).then(c => wrapFunctional(c.default || c))
export const Video = () => import('../../components/video/Video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
export const Videos = () => import('../../components/video/Videos.vue' /* webpackChunkName: "components/videos" */).then(c => wrapFunctional(c.default || c))
export const PhotoGallery = () => import('../../components/photos/PhotoGallery.vue' /* webpackChunkName: "components/photo-gallery" */).then(c => wrapFunctional(c.default || c))
export const PhotoModal = () => import('../../components/photos/PhotoModal.vue' /* webpackChunkName: "components/photo-modal" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const GoUp = () => import('../../components/GoUp.vue' /* webpackChunkName: "components/go-up" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HorizontalPosts = () => import('../../components/HorizontalPosts.vue' /* webpackChunkName: "components/horizontal-posts" */).then(c => wrapFunctional(c.default || c))
export const Posts = () => import('../../components/posts/Posts.vue' /* webpackChunkName: "components/posts" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
