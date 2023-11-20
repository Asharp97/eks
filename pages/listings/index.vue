<template>
  <div class="listings container">


    <div class="top">
      <div class="t2 land-count"> 115 Adet İlan Bulundu </div>
      <div class="headers mobile-hide white-bg">
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

      <div @click="showFilter = !showFilter" class="filter-button white-bg mobile-show">
        <button>
          <div class="p2"> Filtrele </div>
        </button>
      </div>

      <div class="sort white-bg">
        <button>
          <div class="p2"> Liste Sıralama </div>
          <Icon name="ep:arrow-down" class="icon" />
        </button>
        <q-menu fit transition-show="jump-down" transition-hide="jump-up">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>Fiyat</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Metre</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>

    <div class="filter-listing-row" :class="{ 'hide-filter': !showFilter }">

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
            <q-checkbox size="lg" dense v-model="city[n - 1]" :label="`city name ${n - 1}`" color="black" v-for="n in 8"
              class="check" :class="{ 'active': city[n - 1] }" />
          </div>

          <btn2 text="Sonuçları Listele" />
        </div>
      </div>
      <div class="listing">

        <div class="lands">
          <div class="white-bg" v-for="n in 14">
            <NuxtLink :to="`listings/${n}`" class="land">
              <div class="img-wrapper">
                <nuxt-img class="land-img" src="fillform.png" />
              </div>


              <div class="text">
                <div class="title">
                  <div class="p2 gray">
                    #Eskisehir
                  </div>
                  <div class="p2">
                    Eksland güvencesiyle satılık arsa
                  </div>
                </div>
                <div class="details">

                  <div class="param p2">
                    500m2
                  </div>
                  <div class="param p2">
                    11.000 €
                  </div>
                  <div class="param p2 last">
                    Alpu
                  </div>
                </div>
              </div>

              <div class="buttons">
                <button class="inv">Ilanı İncele</button>
                <button>Hemen Ara</button>
              </div>

            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const price = ref({ min: 0, max: 100 })
const km = ref({ min: 0, max: 100 })
let city = ref(new Array(8).fill(false))

const showFilter = ref(false)

definePageMeta({
  layout: 'invert-nav-color'
})


const print = (x) => { console.log(x) }
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.hide-filter {
  gap: 0;

  .filter {
    overflow: hidden;
    width: 0;
  }

  .listing {
    width: 100%;
  }
}
</style>