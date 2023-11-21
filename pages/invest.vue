<template>
  <div class="invest ">
    <section>
      <hero img="hero-invest" text="Nasıl yatırım yapabilirim?" id="form" />
    </section>
    <div class="gap">
      <section class="titles white-bg">
        <div class="p1 mpi">3 aşamada yatırımınızı gerçekleştirin.</div>

        <div class="title" id="nav">
          <div class="logo"> EKS <span>LAND</span> </div>
          <h4>Eskişehir</h4>
          <div class="display">3 adımda yatırımınızı <br> kolayca <br> gerçekleştirebilirsiniz.</div>
        </div>
      </section>
      <section class="firststep container mpi">
        <div class="display">
          Bizimle iletişim <br> Kurun
        </div>
        <div class="number">1</div>
        <nuxt-img class="img" src="arrow.png" />
        <div class="zoom">
          <div class="p1">
            Sitemizde iletişim bölümünde bulunan formu doldurmanız sizinle iletişim kurmamız için yeterli olacaktır.
            <b>
              Ardından zoom toplantısı
            </b>
            planlayıp sizleri daha yakından tanıma fırsatı bulmuş olacağız.
          </div>
          <div class="btns">
            <a href="mailto:destek@eksland.com.tr">
              <btn2 text="destek@eksland.com.tr" />
            </a>
            <btn2 :inv="true" text="Form Doldur" destination="invest#form" />
          </div>
        </div>
      </section>

      <section class="secondstep white-bg">
        <div class="container">
          <div class="part1">

            <div class="display">Gerekli Evrakları <br> Hazırlayın</div>
            <div class="p1">Beğendiğiniz arsa için depozito göndermeniz ve bulunduğunuz ülkenin büyük elçiliğinden satış
              için
              <b> vekaletname vermeniz</b> işlemleri başlatmanız ve satış için gerekli olan evrakları hazırlamanız adına
              yeterli olacaktır.
            </div>
          </div>
          <div class="part2">

            <div class="display">Arsa Sahibi Olun</div>
            <div class="p1">Evrak işlemleri ardından sizin için tapu dairesinde randevu oluşturacağız. </div>
          </div>
          <div class="number">2</div>
        </div>

      </section>

      <section class="thirdstep mpi big-container">
        <div class="sector">
          <nuxt-img class="img" src="own1.png" />
          <div class="p1">Satış işleminizi randevu tarihinde gerçekleştirip tapunuzu sizlere teslim edeceğiz. Artık arsa
            sahibi oldunuz! İstediğiniz gibi değerlendirmeye hazırsınız. Şimdi form doldurun!</div>
          <btn2 :inv="true" text="form doldur" />
        </div>
        <div class="sector2">
          <nuxt-img class="img" src="own2.png" />
          <nuxt-img class="img mobile-hide" src="own3.png" />
        </div>
        <div class="sector3">
          <div class="three">

            3
          </div>
        </div>

      </section>


      <section class="decks big-container">
        <div class="deck">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards">
            <swiper-slide class="card" v-for="card in cards1">
              <Icon :name="`${card.icon}`" class="icon" />
              <div class="p1">{{ card.title }}</div>
              <div class="p2">{{ card.details }}</div>
            </swiper-slide>
          </swiper>
          <div class="p1 subtitle">
            Arazi yatırımı, uzun vadeli bir yatırım stratejisi olarak dikkat çekiyor. Doğru seçilen bir arazi, <b>
              gelecekte değer kazanabilir ve farklı kullanım amaçlarına hizmet edebilir.</b>
          </div>
        </div>
        <div class="deck">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="cards">
            <swiper-slide class="card card2" v-for="card in cards2">
              <Icon :name="`${card.icon}`" class="icon" />
              <div class="p1">{{ card.title }}</div>
              <div class="p2">{{ card.details }}</div>
            </swiper-slide>
          </swiper>
          <div class="p1 subtitle">
            Ancak, başarılı bir arazi yatırımı <b> için dikkatli bir araştırma, bütçe planlaması ve yerel yasal
              düzenlemelere uyum önemlidir.
            </b>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
const modules = [EffectCards]

import content from "../assets/content.json"
const cards1 = content.cards1
const cards2 = content.cards2
</script>

<style lang="scss" scoped></style>