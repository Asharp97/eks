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
      <div class="form-bg ">
        <div class="form-inner">
          <div class="text">
            <h3>Hemen Bize Ulaşın</h3>
            <div class="p2">Ücretsiz bilgi edinin.</div>
          </div>
          <form>
            <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
            <input type="text" placeholder="E-mail Adresiniz" v-model="email" name="email">
            <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
            <!-- <input type="text" placeholder="Hangi ülkede yaşıyorsunuz?" v-model="country" name="country"> -->
            <!-- <q-select borderless v-model="country" :options="countries" label="Hangi ülkede yaşıyorsunuz?" class="input"
              " /> -->
            <select name="" id="" @click="getCountries()">

              <option value="" selected>Hangi ülkede yaşıyorsunuz?</option>
              <option value="" v-for="(country, n) in countries ">{{ countries[n] }}</option>
            </select>
          </form> 
          <btn2 @click="submit()" :full="true" text="Bizimle iletişime geçin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


defineProps(['text', 'img']);

const name = ref()
const email = ref()
const telephone = ref()
const country = ref()

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
      // console.log('succesfull: ' + JSON.stringify(data))
      dialog.value = true
      // name.value = ''
      // email.value = ''
      // telephone.value = ''
      // country.value = ''
    }
    if (err) throw err
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
  countries.value = JSON.stringify(data.value)
  console.log(countries.value)
}

onMounted(() => {
  getCountries();
})
</script>

<style lang="scss" scoped></style>