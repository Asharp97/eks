<template>
  <div class="listings container">
    <div class="filter">
      <div class="t2 land-count"> 115 Adet İlan Bulundu </div>
      <div class="filter-inner white-bg">
        <div class="t2"> Fiyat </div>
        <div class="inputs">
          <input type="number" v-model="price.min">
          -
          <input type="number" v-model="price.max">
        </div>
        <q-range v-model="price" :min="0" :max="100" @change="print(price)" color="black" thumb-color="black" label />


        <div class="t2">
          Metrekare
        </div>
        <div class="inputs">
          <input type="number" v-model="km.min">
          -
          <input type="number" v-model="km.max">
        </div>
        <q-range v-model="km" :min="0" :max="100" @change="print(km)" color="black" thumb-color="black" label />

        <div class="t2">
          İlçeler
        </div>
        <div class="checklist">
          <q-checkbox size="lg" dense v-model="city[n]" label="city name" color="black" v-for="n in 8" class="check"
            :class="city[n] ? 'active' : ''" />
        </div>

        <btn2 text="Sonuçları Listele" />
      </div>
    </div>

    <div class="listing">
      <div class="top">

        <div class="headers white-bg">
          <div class="p2">
            Görsel, ilan başlığı & Şehir bilgisi
          </div>

          <span>
            <div class="header ">
              Metrekare
            </div>
            <div class="header ">
              Fiyat
            </div>
            <div class="header ">
              İlçe
            </div>
          </span>
        </div>

        <div class="sort white-bg">
          <button>
            <div class="p2"> Liste Sıralama </div>
            <Icon name="ep:arrow-down" class="icon" />
          </button>
          <q-menu fit transition-show="jump-down" transition-hide="jump-up">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>

      </div>

      <div class="lands">
        <div class="white-bg" v-for="n in 14">
          <NuxtLink :to="`listings/${n}`" class="land">
            <div class="left">
              <nuxt-img class="land-img" src="fillform.png" provider="imagekit" />
              <div class="title">
                <div class="p2 gray">
                  #Eskisehir
                </div>
                <div class="p2">
                  Eksland güvencesiyle satılık arsa
                </div>
              </div>
            </div>
            <div class="right">
              <div class="param p2">
                500m2
              </div>
              <div class="param p2">
                11.000 €
              </div>
              <div class="param p2 last">
                Alpu
              </div>
              <div class="buttons">
                <NuxtLink to="/listings/1">
                  <button class="inv">Ilanı İncele</button>
                </NuxtLink>
                <button>Hemen Ara</button>
              </div>

            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts"  setup>
const price = ref({ min: 0, max: 100 })
const km = ref({ min: 0, max: 100 })

let city = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

definePageMeta({
  layout: 'invert-nav-color'
})


const print = (x: any) => { console.log(x) }
</script>

<style lang="scss" scoped></style>