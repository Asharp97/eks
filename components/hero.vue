<template>
  <div class="hero">
    <nuxt-img class="landing-image" :src="`${img}.png`" />
    <div class="landing-page container">
      <div class="landing-text ">
        <div class="display">
          {{ text }}
        </div>
      </div>
      <div class="form-bg">
        <div class="form-inner">
          <div class="text">
            <h3>Hemen Bize Ulaşın</h3>
            <div class="p2">Ücretsiz bilgi edinin.</div>
          </div>
          <form>
            <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
            <input type="text" placeholder="E-mail Adresiniz" v-model="email" name="email">
            <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
            <input type="text" placeholder="Hangi ülkede yaşıyorsunuz?" v-model="country" name="country">
          </form>
          <btn2 @click="submit()" text="Benimle İletişime Geç" />
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
      console.log('succ' + JSON.stringify(data))
    }
    if (err) throw err
  }
  catch (error) { console.log(error) }
  finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped></style>