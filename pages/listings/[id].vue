<template>
  <div>
    <div class="listing-details gap">
      <section>
        <div class="white-bg">
          <div class="container">
            <div class="details">
              <div class="imgDiv">
                <h2>EKSLAND güvencesiyle yatırım fırsatı</h2>
                <nuxt-img class="img" src="listing-img.png" provider="imagekit" />

              </div>
              <div class="textDiv">
                <h4>Arazi Detayları</h4>
                <p>Eskişehir’de bulunan fırsat araziler için bizlerle hemen iletişim kurun.</p>
                <hr>
                <div class="params">
                  <div class="title" v-for="n in 7"> Metrekare: <div class="param"> &nbsp;512m2 </div>
                  </div>
                </div>
                <btn2 text="İletişime Geç" />
              </div>
            </div>
            <div class="price">
              <h4>Arazi fiyatı: 15.000 €</h4>
              <span>Satın almak için hemen iletişime geçin.</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <features />
        </div>
      </section>

      <section class="container">
        <onetwolayout :text="lookcloser[0].text" :title="lookcloser[0].title" :titlesub="lookcloser[0].subtitle" />
        <!--  :img1="" :img2=""  -->
      </section>

      <section class="white-bg">
        <metrekare />

      </section>

      <section>
        <div class="closer-look container">
          <h1>Araziye yakından bakın</h1>
          <swiper :navigation="true" :loop="true" :modules="modules" class="swiper single-nav"
            @slideNextTransitionStart="nextEnd">
            <swiper-slide v-for="n in 4" class="slide">
              <nuxt-img class="img" src="closer-look.png" provider="imagekit" />
            </swiper-slide>
          </swiper>
          <div class="pagination">
            <div class="dots" v-for="(pag, n) in  4" :class="{ 'active-pagination': n == activePag }"></div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="title">
            <div class="display">
              Eskişehir
            </div>
            <div class="p1">
              <b> Eskişehir</b>, tarihi zenginliği, kültürel mirası ve modern yaşam tarzının mükemmel bir birleşimini
              sunan
              gelecek
              için <b> yatırım</b> fırsatları barındıran bir şehirdi.
            </div>
          </div>
          <slider :swiper="swipedata" />
        </div>
      </section>

      <section class="container">
        <TapuSteps />
      </section>
    </div>
  </div>
</template>

<script setup>
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const modules = [Navigation]

//patination
const activePag = ref(0)

const nextEnd = () => {
  activePag.value += 1
  if (activePag.value == 4)
    activePag.value = 0

}

const id = useRoute().params.id
definePageMeta({ layout: 'invert-nav-color' })

//content import
import content from "../../assets/content.json"
const swipedata = content.eskisehirSlide
const lookcloser = content.lookcloser

</script>

<style lang="scss" scoped></style>