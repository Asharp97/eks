<template>
  <div class="home gap">

    <section>
      <hero class="hero" text="EKSLAND ile toprakta büyüyen yatırımlar" img="hero-home" />
    </section>

    <section class="container">
      <div class="feature-cards">
        <div class="card" v-for="item in feature">
          <div class="title">
            <div class="t1">{{ item.title }}</div>
            <Icon :name="item.icon" />
          </div>
          <div class="p2">{{ item.text }}</div>
        </div>
      </div>
    </section>

    <section>
      <div class="popular-ads container">
        <div class="top">
          <div class="header">
            <h1>Popüler İlanlar</h1>
            <div class="sub-title">
              <div class="p1">En çok ilgi gören ilanları öğrenin. <br /> </div>
              <div class="p1">Popüler arazilere göz atın.</div>
            </div>
          </div>
        </div>
        <swiper :slidesPerView="3" :loop="true" :spaceBetween="44" :navigation="true" :modules="moduleLand"
          :scrollbar="{ hide: true }" class="swiper">
          <swiper-slide v-for="n in 8">
            <div class="land">
              <nuxt-img class="land-img" src="land-1.png" provider="imagekit" />
              <div class="text">
                <div class="t2">
                  EKS Land ile Eskişehir’den Yatırımlık Arsa
                </div>
                <div class="measurement">
                  <Icon class="icon" name="arcticons:tapemeasure" />
                  <div class="p2">345 m</div>
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

    <section>
      <TapuSteps />
    </section>

    <section>
      <div class="invest-bg white-bg">

        <div class="invest container">
          <h1>Yatırımınıza değer katmak için yanınızdayız!</h1>
          <hr class="separator">
          <div class="boxes">

            <div class="box" v-for="item in invests">
              <Icon :name="item.icon" class="icons" />
              <div class="t1">
                {{ item.title }}
              </div>
              <div class="t2">
                {{ item.p }}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="why-Eskisehir">
        <div class="text">
          <div class="display"> Neden </div>
          <h4> Eskişehir </h4>
          <div class="display"> Tercih Edilmeli? </div>
        </div>
        <div class="p1">Şehrin stratejik konumu, ulaşım altyapısı ve hızla gelişen ekonomisi, arazi değerlerini artırma
          potansiyeli sunar. Eskişehir, eğitim kurumları, kültürel etkinlikler ve sağlık hizmetleri gibi yaşam kalitesini
          yükselten faktörlere sahiptir. Bu nedenle Eskişehir'deki araziler, uzun vadeli yatırımlar için çekici bir fırsat
          olarak kabul edilir.</div>
        <nuxt-img class="why-image" src="whyeskisehir.png" provider="imagekit" />
        <btn text="Neden Eskişehir" icon="octicon:feed-plus-16" destination="whyeskisehir" />
      </div>
    </section>

    <section>
      <div class="faq-wrapper">
        <div class="faq" @click="openFaq[n] = !openFaq[n]" v-for="(faq, n) in faqs">
          <div class="question">
            <div class="t2">
              <span>
                0{{ n + 1 }}.
              </span>
              {{ faq.label }}
            </div>
            <div class="icons" :class="openFaq[n] ? 'open-icons' : ''">
              <Icon name="octicon:dash-16" class="right-icon icon" />
              <Icon name="octicon:dash-16" class="left-icon icon" />
            </div>
          </div>
          <div class="answer" :class="openFaq[n] ? 'open' : ''">
            <div class="p2"><br> {{ faq.content }}</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const moduleLand = ref([Scrollbar, Navigation,])


const loading = ref(false)

const openFaq = ref([true, false, false, false, false, false])

const name = ref()
const email = ref()
const telephone = ref()
const country = ref()

import content from "../assets/content.json"
const feature = content.features
const steps = content.steps
const faqs = content.faqs
const invests = content.invests

const supabase = useSupabaseClient()
const submit = async () => {
  try {
    loading.value = true
    const { data, err } = await supabase
      .from('contact')
      .insert({
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        country: country.value
      })
      .select()
    if (data) {
      // console.log('succ' + JSON.stringify(data))

    }
    if (err) throw err
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}



</script>

<style lang="scss" scoped></style> 