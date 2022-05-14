<script>
export default {
  methods: {
    scroll() {
      if (process.client) window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>

<template>
  <div class="fixed-bottom d-flex p-4 justify-content-end">
    <div class="rounded p-2 bg-light scroll" @click="scroll">
      <i class="fa fa-angle-up d-flex justify-content-center align-items-center bg-info rounded-circle" aria-hidden="true"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll {
  cursor: pointer;
}

.fa {
  font-size: 36px;
  width: 44px;
  height: 44px;
  font-weight: bold;
}

.fa::before {
  margin-bottom: 4px;
}
</style>