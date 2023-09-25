<template>
  <div>
    <swiper :modules="modules" :speed="500" :keyboard="{
      enabled: true,
    }" :slidesPerView="1" :direction="'vertical'" :mousewheel="true" class="swipe">
      <swiper-slide class="frame">
        <nuxt-img class="landingImage" src="eks/section-1.png?updatedAt=1695642343419" provider="imagekit"/>
      </swiper-slide>
      <swiper-slide class="frame">slide 2 </swiper-slide>
      <swiper-slide class="frame">Slide 3 </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Keyboard } from 'swiper/modules';
// import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      menu: false,
      modules: [Mousewheel, Keyboard],
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe {
  width: 100%;
  height: 100vh;

  .frame {
    position: relative;
    width: 100%;
    height: 100vh;
    .landingImage{
      width: 100%;
    }

    .image {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      // background-color: #000;
      background-position: center center;
      background-size: contain;
      object-fit: cover;
      z-index: 0;
    }
  }
}
</style>