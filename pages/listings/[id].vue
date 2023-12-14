<template>
  <div>
    <!-- {{ land.imgURL }} -->
    <div class="listing-details gap ">
      <section>
        <div class="white-bg">
          <div class="container mpi">
            <div class="details">
              <div class="imgDiv">
                <h2>EKSLAND güvencesiyle yatırım fırsatı</h2>
                <!-- <nuxt-img sizes="xs:640px sm:768px md:784px lg:877px" class="img" src="listing-img.png" /> -->
                <img :src="land.imgURL[0]" alt="" class="img">
              </div>
              <div class="textDiv">
                <h4>Arazi fiyatı: {{ land.landPrice }}.00 €</h4>
                <p>Satın almak için hemen iletişime geçin.</p>

                <hr>
                <div class="params">
                  <div class="title" v-for="(x, n, q) in section1">
                    {{ params[q] }}:
                    <div class="param">
                      &nbsp;{{ x }}
                      <span class="measure" v-if="q == 2"> m&sup2; </span>
                      <span class="measure" v-if="q == 3"> € </span>
                    </div>
                  </div>
                </div>
                <btn2 text="Hemen Satın Al" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <features :data="section2" />
        </div>
      </section>

      <section>
        <div class="closer-look container">
          <h1>Araziye yakından bakın</h1>
          <swiper :navigation="true" :loop="true" class="swiper noNav" @slideNextTransitionStart="nextEnd"
            :spaceBetween="30" @slidePrevTransitionStart="prevEnd">
            <swiper-slide v-for="n in land.imgURL" class="slide">
              <!-- <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px" class="img" src="closer-look.png" /> -->
              <img :src="n" class="img" alt="">
            </swiper-slide>
          </swiper>

          <div class="pagination">
            <div class="dots" v-for="(pag, n) in  land.imgURL.length" :class="{ 'active-pagination': n == activePag }">
            </div>
          </div>

        </div>
      </section>

      <section class="container mpi">
        <onetwolayout :text="lookcloser[0].text" :title="lookcloser[0].title" :titlesub="lookcloser[0].subtitle"
          :img1="land.imgURL[land.imgURL.length - 1]" :img2="img2" />
      </section>

      <section class="white-bg">
        <metrekare />
      </section>

      <section>
        <div class="container">
          <div class="title ">
            <div class="display">
              Eskişehir
            </div>
            <div class="p1">
              <b> Eskişehir</b>, tarihi zenginliği, kültürel mirası ve modern yaşam tarzının mükemmel bir birleşimini
              sunan gelecek için <b> yatırım</b> fırsatları barındıran bir şehirdi.
            </div>
          </div>
          <slider :swiper="swipedata" space="32" />
        </div>
      </section>
      <section class="container">
        <TapuSteps />
      </section>
    </div>
  </div>
</template>

<script setup>

const id = useRoute().params.id
const supabase = useSupabaseClient()
const land = ref({ landPrice: '', imgURL: [] })
const section1 = ref()
const section2 = ref()
let img2;
let details = async () => {
  const { data, error } = await supabase
    .from('lands')
    .select()
    .eq('id', id)
  if (data) {
    land.value = data[0]
    section1.value = Object.fromEntries(Object.entries(land.value).slice(3, 10))
    section2.value = Object.fromEntries(Object.entries(land.value).slice(11, 20))
    // if (land.value.imgURL.length > 4)
    img2 = [land.value.imgURL[land.value.imgURL.length - 3], land.value.imgURL[land.value.imgURL.length - 2]]
  }
}

import content from "../../assets/content.json"
const params = content.params

onMounted(() => {
  details()
})


//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

//patination
const activePag = ref(0)

const nextEnd = () => {
  activePag.value += 1
  if (activePag.value == land.value.imgURL.length)
    activePag.value = 0
}
const prevEnd = () => {
  activePag.value -= 1
  if (activePag.value == 0)
    activePag.value = land.value.imgURL.length
}

definePageMeta({ layout: 'invert-nav-color' })

//content import
const swipedata = content.eskisehirSlide
const lookcloser = content.lookcloser


</script>

<style lang="scss" scoped></style>