<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <button class="next" @click="swiper.slideNext()">
    <Icon name="material-symbols:expand-circle-right-rounded" class="icon"/>
  </button>
  <!-- <button class="prev" @click="swiper.slidePrev()">
    <Icon name="material-symbols:expand-circle-right-rounded" class="icon"/>
  </button> -->
</template>

<style scoped lang="scss">
button {
  position: absolute;
  bottom: 20px;
  z-index: 100;
  .icon{
    font-size: 3rem;
  }
}

.prev {
  transform: rotate(180deg);
}

.next {
  right: 0;
}
</style>
