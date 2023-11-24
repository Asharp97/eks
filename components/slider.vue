<template>
  <div class="slider">
    <swiper :space-between="space ? space : -200" :scrollbar="{ hide: true }" :slidesPerView="2" :modules="modules"
      :navigation="true" :loop="true" class="swiper">
      <swiper-slide v-for="(x, n) in swiper" class="slide">
        <nuxt-img sizes="xs:320px sm:640px md:768px lg:798px" class="img" :src="`${x.img}.png`" />
        <div class="p1"> {{ x.label }} </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
defineProps(['swiper', 'space']);

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
const modules = [Scrollbar, Navigation]

</script>

<style lang="scss" scoped></style>