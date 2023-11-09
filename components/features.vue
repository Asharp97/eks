<template>
  <div>
    <h1>Öne çıkan başlıklar</h1>
    <div class="features white-bg">
      <div class="p1">Yatırımınız ile ilgili başlıklar. <br>
        Arazinizin önemli konumlara mesafesini öğrenin.</div>

      <nuxt-img class="features-img" src="features.png" provider="imagekit" />

      <div class="vertical-separator"></div>

      <swiper :slidesPerView="9" :modules="modules" :navigation="true" :loop="true" class="swiper single-nav"
        @slideNextTransitionStart="nextEnd">

        <swiper-slide v-for="(slider, n) in sliders" class="slide"
          :class="{ 'active-slide': n == i, 'swiper-slide-active': n == i - 3 }" @click="update(n)">
          <div class="frame">
            <div class="background">
              <Icon :name="slider.icon" class="icon" />
            </div>
          </div>
          <div class="feature-details">
            <div class="t2"> {{ slider.param }} </div>
            <hr>
            <h4> {{ slider.number }} </h4>
          </div>
        </swiper-slide>

        <swiper-slide v-for="(slider, n) in sliders" class="slide" :class="{ 'active-slide': n == i }" @click="update(n)">
          <div class="frame">
            <div class="background">
              <Icon :name="slider.icon" class="icon" />
            </div>
          </div>
          <div class="feature-details">
            <div class="t2"> {{ slider.param }} </div>
            <hr>
            <h4> {{ slider.number }} </h4>
          </div>
        </swiper-slide>

      </swiper>
      <div class="pagination">
        <div class="dots" v-for="(pag, n) in 9" :class="{ 'active-pagination': n == activePag }" @click="update(n)">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const sliders = content.sliders

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const modules = [Navigation]

let i = ref(4)
let activePag = ref(4)

const nextEnd = () => {
  if (i.value < 8) {
    i.value += 1
  }
  else {
    i.value = 0
  }

  if (activePag.value < 8)
    activePag.value += 1
  else
    activePag.value = 0
}
const update = (n) => {
  i.value = n
  activePag.value = n

  console.log('i= ' + i.value)
  console.log('activePag= ' + activePag.value)
}


</script>

<style lang="scss" scoped></style>