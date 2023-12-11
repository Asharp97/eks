<template>
  <div class="postAd">
    <div class="inputs">
      <ul>
        <div class="input-wrapper">
          <input type="number" v-model="ilan.landPrice" placeholder="Arazi Fiyatı">
        </div>

        <div class="input-wrapper">
          <input type="text" v-model="ilan.cityLocation" placeholder="Bulunduğu Şehir">
        </div>

        <div class="input-wrapper">
          <input type="text" v-model="ilan.districtLocation" placeholder="Bulunduğu İlçe">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.squareMeters" placeholder="Metrekare">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.pricePerSquareMeter" placeholder="Metrekare fiyatı">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.islandNo" placeholder="Ada no">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.sheetNo" placeholder="Pafta no">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.plotNumber" placeholder="Parsel no">
        </div>


        <div class="input-wrapper">
          <input type="file" class="hide" @change="imageSelected" ref="imageUploadReference" multiple="multiple">
          <btn text="Resimler Ekle" @click="$refs.imageUploadReference.click()" />
          <Icon name="material-symbols:close" class="icon" @click="clearImages" />
        </div>

        <div class="input-wrapper">
          <div>
            <div class="p2" v-for="x in imgName">{{ x }}</div>
          </div>
        </div>
      </ul>

      <ul>
        <div class="input-wrapper">
          <input type="number" v-model="ilan.istanbulDistance" placeholder="İstanbul'a olan uzaklık">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.ankaraDistance" placeholder="Ankaraya olan uzaklık">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.cityCenterDistance" placeholder="Şehir Merkezine olan uzaklık">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.nearestSettlementDistance"
            placeholder="En yakın yerleşim yerine olan uzaklık">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.airportDistance" placeholder="Havaalanına olan uzaklık">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.landSalesRate" placeholder="Bölgenin arsa satış oranı">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.realEstateValueLast5Years" placeholder="Son 5 Yıldaki bölge emlak değeri">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.regionalLandsValuationRate"
            placeholder="Bölge arazilerinin değerlenme oranı (Yıllık)">
        </div>

        <div class="input-wrapper">
          <input type="number" v-model="ilan.landToIndustrialZoneDistance"
            placeholder="Arsanın sanayı bölgesine uzaklığı">
        </div>
      </ul>

    </div>

    <btn2 text="APPLY CHANGES" @click="editIlan()" />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const id = useRoute().params.id
const imgName = ref([])
const ilan = ref({})
const getIlan = async () => {
  // loading.value = true
  const { data, error } = await supabase
    .from('lands')
    .select()
    .eq('id', id)
  if (data) {
    ilan.value = data[0]
    imgName.value = data[0].imgName
  }
  // loading.value = false
  console.log(ilan.value)
}
const editIlan = async () => {
  const { error } = await supabase
    .from('lands')
    .update(ilan.value)
    .eq('id', id)
  if (error)
    console.log(error)
}
const clearImages = () => {
  console.log(imgName.value)
  for (let i = 0; i < imgName.value.length; i++) {
    imgName.value[i] = null
  }
  deleteImageFromDB()
}
const deleteImageFromDB = async () => {
  const { data, error } = await supabase
    .storage
    .from('images')
    .remove(imgName.value)
}

onMounted(() => {
  getIlan()
})
</script>

<style lang="scss" scoped></style>