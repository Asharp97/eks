<template>
  <div>
    <div class="filter">

      <div class="filter-inner white-bg">
        <div class="t2"> Fiyat </div>
        <div class="inputs">
          <input type="number" v-model="price.min" min="1" max="100">
          -
          <input type="number" v-model="price.max" min="1" max="100">
        </div>
        <q-range v-model="price" :min="0" :max="100" @change="print(price)" color="black" thumb-color="black" label />


        <div class="t2">
          Metrekare
        </div>
        <div class="inputs">
          <input type="number" v-model="km.min" min="1" max="100">
          -
          <input type="number" v-model="km.max" min="1" max="100">
        </div>
        <q-range v-model="km" :min="0" :max="100" @change="print(km)" color="black" thumb-color="black" label />

        <div class="t2">
          İlçeler
        </div>
        <div class="checklist">
          <q-checkbox size="lg" dense v-model="city[n - 1]" label="city name" color="black" v-for="n in 8" class="check"
            :class="{ 'active': city[n - 1] }" />
        </div>

        <btn2 text="Sonuçları Listele" />
      </div>
    </div>
  </div>
</template>

<script setup>
const price = ref({ min: 0, max: 100 })
const km = ref({ min: 0, max: 100 })

let city = ref(new Array(8).fill(false))

const print = (x) => { console.log(x) }
</script>

<style lang="scss" scoped></style>