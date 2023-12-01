<template>
  <div class="admin container">
    <!-- <h1 @click="signup">sign ali up</h1> -->
    <form v-if="!store.user" action="" class="form ">
      <input type="email" v-model="mail" placeholder="email" name="email" />
      <input type="password" v-model="pass" placeholder="pass" name="password" />
      <btn2 text="sign in" @click="signin" />
    </form>

    <div v-if="store.user" class="content">

      <div class="admin-nav">
        <div class="tabs">
          <btn2 text="Ilanlar" :inv="!tabs[0]" @click="toggleTabs(0)" />
          <btn2 text="Ilan Ekle" :inv="!tabs[1]" @click="toggleTabs(1)" />
          <btn2 text="clients" :inv="!tabs[2]" @click="toggleTabs(2)" />
        </div>
        <btn2 text="sign out" @click="signout" />
      </div>

      <div class="clients" v-if="tabs[2]">
        <table>
          <thead>
            <tr>
              <th>
                <Icon name="material-symbols:sync-rounded" @click="getClients" class="icon" />
              </th>
              <th v-for="header in clientHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in clients ">
              <td>
                <Icon name="ic:baseline-delete" class="icon" @click="deleteClients(row.id)" />
              </td>
              <td v-for="(data, n) in row" :class="{ 'hide': n == 'created_at' }">
                {{ data }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ads" v-if="tabs[0]">
        <table>
          <thead>
            <tr>
              <th>
                <Icon name="material-symbols:sync-rounded" @click="getIlanlar" class="icon" />
              </th>
              <th></th>
              <th v-for="header in ilanHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ilanlar ">
              <td>
                <Icon name="material-symbols:edit" class="icon" @click="editIlan(row.id)" />
              </td>
              <td>
                <Icon name="ic:baseline-delete" class="icon" @click="deleteIlan(row.id)" />
              </td>
              <td v-for="(data, h, n) in row" :class="{ 'hide': h == 'created_at' || n > 9 }">
                {{ data }}
              </td>
              <td style="text-align: center;">
                <Icon class="icon" name="ic:outline-remove-red-eye" @click="showMore(row.id)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="postAd" v-if="tabs[1]">
        <div class="inputs">
          <ul>
            <div class="input-wrapper">
              <input type="number" v-model="newAd.landPrice" placeholder="Arazi Fiyatı">
            </div>

            <div class="input-wrapper">
              <input type="text" v-model="newAd.cityLocation" placeholder="Bulunduğu Şehir">
            </div>

            <div class="input-wrapper">
              <input type="text" v-model="newAd.districtLocation" placeholder="Bulunduğu İlçe">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.squareMeters" placeholder="Metrekare">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.pricePerSquareMeter" placeholder="Metrekare fiyatı">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.islandNo" placeholder="Ada no">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.sheetNo" placeholder="Pafta no">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.plotNumber" placeholder="Parsel no">
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
              <input type="number" v-model="newAd.istanbulDistance" placeholder="İstanbul'a olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.ankaraDistance" placeholder="Ankaraya olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.cityCenterDistance" placeholder="Şehir Merkezine olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.nearestSettlementDistance"
                placeholder="En yakın yerleşim yerine olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.airportDistance" placeholder="Havaalanına olan uzaklık">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.landSalesRate" placeholder="Bölgenin arsa satış oranı">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.realEstateValueLast5Years"
                placeholder="Son 5 Yıldaki bölge emlak değeri">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.regionalLandsValuationRate"
                placeholder="Bölge arazilerinin değerlenme oranı (Yıllık)">
            </div>

            <div class="input-wrapper">
              <input type="number" v-model="newAd.landToIndustrialZoneDistancee"
                placeholder="Arsanın sanayı bölgesine uzaklığı">
            </div>
          </ul>
        </div>

        <btn2 text="Ilan Ekle" @click="postAd()" />
      </div>

    </div>
  </div>
</template>

<script setup>
//User
import { useStore } from '../stores/useUserStore.ts'
const store = useStore()

const mail = ref('')
const pass = ref('')

const supabase = useSupabaseClient()
const signin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'alyhayyan97@gmail.com',
    password: 'Hayyan123456',
  })
  if (data) {
    store.token = data.session.access_token
    store.user = true
  }
  else
    console.log(error)
}
const signout = async () => {
  await supabase.auth.signOut()
  store.token = ''
  store.user = false
}
const signup = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: '',
    password: '',
  })
}

//Tabs
const tabs = ref([false, true, false])
const toggleTabs = (x) => {
  for (let i = 0; i < tabs.value.length; i++) {
    if (i == x)
      tabs.value[i] = true
    else
      tabs.value[i] = false
  }
  if (x == 2)
    getClients()
  if (x == 0)
    getIlanlar()
}

//JSON
import content from '../assets/content.json'
const clientHeader = content.clientHeader
const ilanHeader = content.ilanHeader

//Contacts
const clients = ref('')
const getClients = async () => {
  const { data, error } = await supabase
    .from('contact')
    .select()
  if (data)
    clients.value = data
}
const deleteClients = async (id) => {
  const { error } = await supabase
    .from('contact')
    .delete()
    .eq('id', id)
  if (error)
    console.log(error)
}
const editClients = async (id) => {
  const { error } = await supabase
    .from('contact')
    .update({ name: 'Han', email: 'ali-wiungi@a7a.com', telephone: '012900090', country: 'afghan' })
    .eq('id', id)
  if (error)
    console.log(error)
}

//Ads
const ilanlar = ref('')
const getIlanlar = async () => {
  const { data, error } = await supabase
    .from('ads')
    .select()
  if (data)
    ilanlar.value = data

}
const deleteIlan = async (id) => {
  const { error } = await supabase
    .from('ads')
    .delete()
    .eq('id', id)
  if (error)
    console.log(error)
}
const editIlan = async (id) => {
  const { error } = await supabase
    .from('ads')
    .update({ landPrice: 5555 })
    .eq('id', id)
  if (error)
    console.log(error)
}

//New Ad
const newAd = { imgURL: [] }
const postAd = () => {
  if (imgFile)
    imgUpload()
  else
    postAdData()
}

const postAdData = async () => {
  const { data, error } = await supabase
    .from('ads')
    .insert(newAd)
    .select()
  if (data)
    console.log(data)
}

// New Image Locally
const imgFile = []
const imgName = ref([])

const imageSelected = (event) => {
  for (let i = 0; i < event.target.files.length; i++) {
    imgFile[i] = event.target.files[i]
    imgName.value[i] = event.target.files[i].name
  }
}

const clearImages = () => {
  for (let i = 0; i < imgFile.length; i++) {
    imgFile[i] = null
    imgName.value[i] = null
  }
}

// New Image to Database
const imgDBName = []
const imgUpload = async () => {
  for (let i = 0; i < imgFile.length; i++) {
    imgDBName[i] = `img_${Date.now()}_${i}.jpg`
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(imgDBName[i], imgFile[i])
    if (data) {
      getImgURL(imgDBName[i], i)
    }
  }
}
const getImgURL = async (name, i) => {
  const { data } = supabase
    .storage
    .from('images')
    .getPublicUrl(name)
  if (data) {
    newAd.imgURL[i] = data.publicUrl
    if (i == imgFile.length - 1)
      postAdData()
  }
}
</script>