<template>
  <div class="container" id="container">
    <div class="mpi">
      <h1>Öne çıkan başlıklar</h1>
      <div class="features white-bg">
        <div class="p1">Yatırımınız ile ilgili başlıklar. <br>
          Arazinizin önemli konumlara mesafesini öğrenin.</div>
        <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="features-img" src="features.png" />
        <div class="vertical-separator"></div>
        <swiper :slidesPerView="count" :modules="modules" :navigation="true" :loop="true" class="swiper single-nav "
          @slideNextTransitionStart="nextEnd">
          <swiper-slide v-for="(x, n, q) in data" class="slide" :class="{ 'active-slide': q == i }">
            <div class="frame">
              <div class="background">
                <Icon  :name="sliders[q].icon" class="icon" />
              </div>
            </div>
            <div class="feature-details">
              <div class="t2"> {{ sliders[q].param }} </div>
              <hr>
              <h4> {{ x }}</h4>
            </div>
          </swiper-slide>
          <swiper-slide v-for="(x, n, q) in data" class="slide" :class="{ 'active-slide': q == i }">
            <div class="frame">
              <div class="background">
                <Icon :name="sliders[q].icon" class="icon" />
              </div>
            </div>
            <div class="feature-details">
              <div class="t2"> {{ sliders[q].param }} </div>
              <hr>
              <h4> {{ x }} KM</h4>
            </div>
          </swiper-slide>
        </swiper>
        <div class="pagination mobile-hide">
          <div class="dots" v-for="(pag, n) in 9" :class="{ 'active-pagination': n == activePag }">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['data'])
import content from "../assets/content.json"
const sliders = content.sliders

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const modules = [Navigation]

let i = ref(4)
let activePag = ref(4)
let count = ref(4)

const nextEnd = () => {
  if (i.value < 8)
    i.value += 1
  else
    i.value = 0

  if (activePag.value < 8)
    activePag.value += 1
  else
    activePag.value = 0
}

onMounted(() => {
  let containerWidth = document.getElementById('container').offsetWidth
  getCount(containerWidth)
})

const getCount = (width) => {
  let num = Math.floor(width / 141)
  if (num % 2 == 0) {
    count.value = num + 1
    i.value = Math.floor((count.value / 2))
  }
  else {
    count.value = num
    i.value = Math.floor(count.value / 2)
  }
}
</script>

<style lang="scss" scoped></style>