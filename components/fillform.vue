<template>
  <div>
    <div class="contact-us-form">
      <div class="half swiper-quote">
        <nuxt-img class="backgroundImg" src="fillform.png" />
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
        <form>
          <h2>Formu Doldurun</h2>
          <div class="p2">Şimdi bizimle iletişime geçin! Danışmanlarımız en kısa sürede size geri dönüş yapacaktır.</div>
          <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
          <input type="text" placeholder="E-mail Adresiniz" v-model="email" name="email">
          <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
          <input type="text" placeholder="Hangi ülkede yaşıyorsunuz?" v-model="country" name="country">
        </form>
        <btn2 @click="submit()" text="Benimle İletişime Geç" />
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

const loading = ref(false)

const name = ref()
const email = ref()
const telephone = ref()
const country = ref()
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