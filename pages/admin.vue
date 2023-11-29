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
              <th v-for="header in clientHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in clients ">
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
              <th v-for="header in ilanHeader">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in ilanlar ">
              <td v-for="(data, n) in row" :class="{ 'hide': n == 'created_at' }">
                {{ data }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="postAd" v-if="tabs[1]">
        <div v-for="input in ilanHeader" class="input-wrapper">
          <label for="">{{ input }}</label>
          <input :placeholder="input">
        </div>
        <btn2 text="ilan Ekle" @click="postAd" />
      </div>

    </div>
  </div>
</template>

<script setup>
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

const tabs = ref([true, false, false])

const toggleTabs = (x) => {
  for (let i = 0; i < tabs.value.length; i++) {
    if (i == x)
      tabs.value[i] = true
    else
      tabs.value[i] = false
  }
}

const clients = ref('')
const ilanlar = ref('')

import content from '../assets/content.json'
const clientHeader = content.clientHeader
const ilanHeader = content.ilanHeader

const getClients = async () => {
  const { data, error } = await supabase
    .from('contact')
    .select()
  if (data)
    clients.value = data
}

const getIlanlar = async () => {
  const { data, error } = await supabase
    .from('ads')
    .select()
  if (data)
    ilanlar.value = data
}

const postAd = async () => {
  const { error } = await supabase
    .from('ads')
    .insert({
      
    })
}

onMounted(() => {
  getClients()
  getIlanlar()
})

</script>


<style lang="scss" scoped>
.admin {
  padding-block: 100px;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    width: 99%;
  }

  .admin-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    .tabs {
      display: flex;
      gap: 20px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    td,
    th {
      padding: 10px;
    }
  }

  table,
  th,
  td {
    text-align: start;
    border: 1px solid lightgray;
  }

  .postAd {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .input-wrapper {
      width: 500px;
    }

  }


  .hide {
    display: none;
  }
}
</style>