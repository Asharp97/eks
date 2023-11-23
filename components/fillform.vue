<template>
  <div>
    <div class="contact-us-form big-container">
      <div class="half swiper-quote mobile-hide ">
        <nuxt-img  class="backgroundImg" src="fillform.png" />
        <swiper :navigation="true" :modules="modules" class="swiper" :loop="true" :space-between="70">
          <swiper-slide>
            <div class="text-bg">
              <div class="title">
                Önceliğimiz Memnuniyetiniz
              </div>
              <div class="p2">İnternet üzerinden yaptığım en doğru yatırımdı. Eksland yatırım araçlarına bakış açımı
                değiştirdi.
                Ayrıca yurdumdan bir toprağım oldu. Çok teşekkür ederim.</div>
              <div class="author">
                Kemal Eren Yılmaz
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
        </swiper>

      </div>
      <div class="half padded-form">
        <Form title="Formu Doldurun"
          subtitle="Şimdi bizimle iletişime geçin! Danışmanlarımız en kısa sürede size geri dönüş yapacaktır." />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const modules = [Navigation, Pagination];

</script>

<style lang="scss" scoped></style>