<template>
  <div class="slider">
    <swiper :space-between="space ? space : -200" :scrollbar="{ hide: true }" :slidesPerView="2" :modules="modules"
      :navigation="true" :loop="true" class="swiper">
      <swiper-slide v-for="(x, n) in   swiper  " class="slide " :class="{ 'size1': size1 }">
        <nuxt-img sizes="xs:320px sm:640px md:768px lg:798px" class="img" :src="`${x.img}.png`" />
        <div class="p1"> {{ x.label }} </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
defineProps(['swiper', 'space', 'size1']);

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation } from 'swiper/modules';
const modules = [Scrollbar, Navigation]


</script>

<style lang="scss" scoped>
.size1 {
  .img {
    // width: 729px;
    width: clamp(15.625rem, 31.003vw + 8.359rem, 45.563rem);
    // height: 537px;
    height: clamp(11.5rem, 22.848vw + 6.145rem, 33.563rem);
  }
}
</style>