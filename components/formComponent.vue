<template>
  <div class="form-inner">
    <q-inner-loading :showing="loading" />

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

    <div class="text">
      <h3>{{ title }}</h3>
      <div class="p2">{{ subtitle }}</div>
    </div>

    <form class="form">
      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !name">
          <Icon name="material-symbols-light:exclamation" />
        </div>
        <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !email">
          <Icon name="material-symbols-light:exclamation" />
        </div>
        <input type="email" placeholder="E-mail Adresiniz" v-model="email" name="email">
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !email">
          <Icon name="material-symbols-light:exclamation" />
        </div>
        <div class="phoneNumber">
          <select name="" id="" v-model="code" :class="{ 'blacktext': code }">
            <option :value="null" disabled selected>+</option>
            <option :value="country.dial_code" v-for="country in countries">
              {{ country.code }} {{ country.dial_code }}
            </option>
          </select>
          <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
        </div>
      </div>

      <div class="inputWrapper">
        <div class="error" v-if="errorMsg && !country">
          <Icon name="material-symbols-light:exclamation" />
        </div>
        <select name="" v-model="country" id="" :class="{ 'blacktext': country }">
          <option :value="null" disabled selected>Hangi ülkede yaşıyorsunuz?</option>
          <option v-for=" country in countries ">{{ country.name }}</option>
        </select>
      </div>

      <btn2 @click=" submit()" :full="true" text="Bizimle iletişime geçin" />

    </form>

  </div>
</template>

<script setup>
defineProps(['title', 'subtitle']);


const errorMsg = ref(false)

const loading = ref(false)

const name = ref()
const email = ref()
const code = ref(null)
const telephone = ref()
const country = ref(null)

const dialog = ref(false)

const api = useSupabaseClient()
const submit = async () => {
  // postInfo()
  sendEmail()

}

const postInfo = async () => {
  try {
    if (name && email && telephone && country)
      loading.value = true
    const { data, err } = await api
      .from('contact')
      .insert({
        name: name.value,
        email: email.value,
        telephone: code.value.concat(telephone.value),
        country: country.value
      })
      .select()
    if (data) {
      dialog.value = true
      name.value = ''
      email.value = ''
      code.value = null
      telephone.value = ''
      country.value = null
      errorMsg.value = false
    }
    if (err) throw err
  }
  catch (error) {
    errorMsg.value = true
    setTimeout(() => { errorMsg.value = false }, 3000);
    console.log(error)
  }
  finally {
    loading.value = false
  }
}

const sendEmail = () => {
  console.log('email')
}

import countryList from "../assets/countries.json"
const countries = countryList

</script>

<style lang="scss" scoped>
.blacktext {
  color: black;
}
</style>