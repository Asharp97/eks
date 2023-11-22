<template>
  <div class="hero">
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro.
          Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <nuxt-img class="landing-image " :src="`${img}.png`" />
    <div class="landing-page mpi container">
      <div class="landing-text">
        <div class="display">
          {{ text }}
        </div>
      </div>
      <div class="form-bg" @click="getCountries()">
        <div class="form-inner">
          <div class="text">
            <h3>Hemen Bize Ulaşın</h3>
            <div class="p2">Ücretsiz bilgi edinin.</div>
          </div>
          <form>
            <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
            <div class="error" v-if="error && !name"> İsim gerekli </div>
            <input type="email" placeholder="E-mail Adresiniz" v-model="email" name="email">
            <div class="error" v-if="error && !email">e-posta eksik veya yanlış</div>
            <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
            <div class="error" v-if="error && !email">telefon numaran eksik</div>
            <select name="" v-model="country" id="" :class="{ 'blacktext': country }">
              <option :value="null" disabled selected>Hangi ülkede yaşıyorsunuz?</option>
              <option v-for=" country in countries ">{{ country }}</option>
            </select>
            <div class="error" v-if="error && !country">lütfen ikamet ettiğiniz ülkeyi seçin</div>


          </form>
          <btn2 @click=" submit()" :full="true" text="Bizimle iletişime geçin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['text', 'img']);

let error = ref(false)

const name = ref()
const email = ref()
const telephone = ref()
const country = ref(null)

const dialog = ref(false)

const api = useSupabaseClient()
const submit = async () => {
  try {
    // loading.value = true
    const { data, err } = await api
      .from('contact')
      .insert({
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        country: country.value
      })
      .select()
    if (data) {
      dialog.value = true
      name.value = ''
      email.value = ''
      telephone.value = ''
      country.value = null
      error.value = false
    }
    if (err) {
      error.value = true
      throw err
    }
  }
  catch (error) { console.log(error) }
  finally {
    // loading.value = false
  }
}

const countries = ref(['turkey', "some other country"])
const csckey = { headers: { 'X-CSCAPI-KEY': 'Zmt0UVBvWElEVnQzYUp4OXBjRk1HRkY0SFd5RTl2WFJWaGJkbElPeg==' } }
const getCountries = async () => {
  const { data, pending, error } = await useFetch('https://api.countrystatecity.in/v1/countries', csckey)
  countries.value = data.value
}

// import countryList from "../countries.json"

</script>

<style lang="scss" scoped>
.blacktext {
  color: black;
}
</style>