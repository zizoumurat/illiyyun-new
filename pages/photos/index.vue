<template>
  <div>
    <Header />
    <PhotoGallery :gallery="gallery" />

  </div>
</template>

<script>
export default {
  async fetch() {
    const { data: banner } = await this.$axios.get("/gallery-banner");
    const { data } = await this.$axios.get("/galleries?_limit=-1");

    this.gallery = data.sort((a, b) => (a.media.created_at < b.media.created_at) ? 1 : -1);
    this.banner = banner.image ? banner.image.url : "";
  },

  data() {
    return {
      banner: '',
      gallery: []
    }
  }
}
</script>
