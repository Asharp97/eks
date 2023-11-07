<template>
  <div>
    <div class="listing-details ">
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

      <div class="container">
        <features />
      </div>
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id
definePageMeta({
  layout: 'invert-nav-color'
})
</script>

<style lang="scss" scoped></style>