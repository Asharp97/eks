<template>
  <div class="admin container">
    <!-- <h1 @click="signup">sign ali up</h1> -->
    <form v-if="!user" action="" class="form ">
      <input type="email" v-model="mail" placeholder="email" name="email" />
      <input type="password" v-model="pass" placeholder="pass" name="password" />
      <btn2 text="sign in" @click="signin" />
    </form>

    <div class="tables">
      <btn2 text="sign out" @click="signout" />
      <table>


      </table>

    </div>


    user = {{ user }}
  </div>
</template>

<script setup>
// const client = useSupabaseClient()
// client.from('')

const supabase = useSupabaseClient()

const mail = ref('')
const pass = ref('')

const user = ref(false)


const signin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'alyhayyan97@gmail.com',
    password: 'Hayyan123456',
  })
  if (data) {
    // user.value = data
    console.log(data)
  }
  else
    console.log(error)
}
const signout = async () => {
  const { error } = await supabase.auth.signOut()
}

const signup = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'ali-his',
    password: 'alialiali',
    options: {
      emailRedirectTo: 'https//example.com/welcome'
    }
  })
}
</script>

<style lang="scss" scoped>
.admin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 100px;
  gap: 20px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 99%;
  }
}
</style>