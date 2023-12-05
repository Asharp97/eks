<template>
  <div class="home gap">

    <section>
      <hero class="hero" text="EKSLAND ile toprakta büyüyen yatırımlar" img="hero-home" />
    </section>

    <section class="container">
      <div class="feature-cards mpi">
        <div class="card" v-for="item in feature">
          <div class="title">
            <div class="t1">{{ item.title }}</div>
            <Icon :name="item.icon" class="icons" />
          </div>
          <div class="p2">{{ item.text }}</div>
        </div>
      </div>
    </section>

    <section>
      <div class="popular-ads container" id="container">
        <div class="top mpi">
          <div class="header">
            <div class="title">
              <h1>Popüler İlanlar</h1>
              <NuxtLink to="listings">
                <div class="p1">
                  İlanlara git
                  <Icon name="material-symbols:play-circle" />
                </div>
              </NuxtLink>
            </div>
            <div class="sub-title">
              <div class="p1">En çok ilgi gören ilanları öğrenin. <br /> </div>
              <div class="p1">Popüler arazilere göz atın.</div>
            </div>
          </div>
        </div>
        <swiper :freeMode="true" :slidesPerView="count" :spaceBetween="44" :navigation="true" :modules="moduleLand"
          :scrollbar="{ hide: true }" class="swiper">
          <swiper-slide v-for="(x, n) in ilanlar">
            <div class="land">
              <nuxt-img sizes="375px" class="land-img" src="land-1.png" />
              <div class="text">
                <div class="t2"> EKS Land ile Eskişehir’den Yatırımlık Arsa </div>
                <div class="measurement">
                  <Icon class="icon" name="arcticons:tapemeasure" />
                  <div class="p2">
                    {{ x.squareMeters }}
                    345 m
                  </div>
                </div>
                <div class="buttons">
                  <button class="price">
                    <div class="t1"> 10.000 € </div>
                  </button>
                  <button class="seeDetail">
                    <div class="p2"> Detayları Gör </div>
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="container">
      <TapuSteps />
    </section>

    <section class="white-bg ">
      <div class="table container mpi">
        <h1>Son <span>5</span> Senede</h1>
        <h4> Türkiye </h4>
        <h1>Yatırım araçlarındaki değişiklikler</h1>
        <table>
          <thead>
            <tr>
              <th v-for="header in table.header">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" row in table.body">
              <td v-for="data in row">
                <Icon :name="data.icon" class="icon" v-if="data.icon" />
                {{ data.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <div class="why-Eskisehir big-container">
        <div class="text">
          <div class="display"> Neden </div>
          <h4> Arazi </h4>
          <div class="display"> Yatırımı Yapılmalı? </div>
        </div>
        <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="why-image" src="whyeskisehir.png" />
      </div>
    </section>

    <section class="ask container">
      <h1 class="mpb">Sıkça sorulan sorular</h1>
      <FaqComponent :faq="faq" class="FaqComponent" />
    </section>

  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
let ilanlar = ref()
const getPopularIlan = async () => {
  const { data, error } = await supabase
    .from('lands')
    .select()
  if (data)
    ilanlar.value = data
}

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
const moduleLand = [Scrollbar, Navigation, FreeMode]

import content from "../assets/content.json"
const feature = content.features
const invests = content.invests
const faq = content.faq
const table = content.table

let count = ref(3)
let containerWidth = ref(null)
onMounted(() => {
  let containerWidth = document.getElementById('container').offsetWidth
  getCount(containerWidth)
  getPopularIlan()
})


watch(
  () => containerWidth,
  () => {
    getCount(containerWidth)
    console.log(containerWidth)
  }
)

const getCount = (x) => {
  count.value = Math.floor(x / 340)
}


</script>



<style lang="scss" scoped></style> 