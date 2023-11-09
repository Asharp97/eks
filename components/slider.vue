<template>
  <div class="slider">
    <swiper :space-between="-200" :scrollbar="{ hide: true }" :slidesPerView="2" :modules="modules" :navigation="true"
      :loop="true" class="swiper">
      <swiper-slide v-for="x in swiper" class="slide">
        <nuxt-img class="img" :src="`${x.img}.png`" provider="imagekit" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
defineProps(['swiper']);

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
const modules = [Scrollbar, Navigation]
</script>

<style lang="scss" scoped></style>