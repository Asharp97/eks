<template>
  <div class="navbar">
    <div class="header-bg">
      <div class="header container">
        <button class="hamburger">
          <Icon name="game-icons:hamburger-menu" @click="showMenu = !showMenu" />
        </button>

        <NuxtLink to="/">
          <div class="logo">
            EKS<span>LAND</span>
          </div>
        </NuxtLink>

        <nav class="mobile-hide desktop-menu">
          <ul>
            <li>
              <NuxtLink to="/">
                Anasayfa
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/listings">
                İlanlar
              </NuxtLink>
            </li>
            <li>
              Şehirler
              <span>
                <Icon name="ph:caret-down-light" class="icon" />
              </span>
              <q-menu fit transition-show="jump-down" transition-hide="jump-up">
                <q-list>
                  <q-item clickable v-close-popup>
                    <NuxtLink to="/whyeskisehir" style="display: flex;align-items: center;">
                      <q-item-section>Eskişehir</q-item-section>
                    </NuxtLink>
                  </q-item>
                </q-list>
              </q-menu>
            </li>
            <li>
              Kurumsal
              <span>
                <Icon name="ph:caret-down-light" class="icon" />
              </span>
              <q-menu fit transition-show="jump-down" transition-hide="jump-up">
                <q-list>
                  <q-item clickable v-close-popup>
                    <NuxtLink to="/invest" style="display: flex;align-items: center;">
                      <q-item-section>Nasıl yatırım yapabilirim?</q-item-section>
                    </NuxtLink>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <NuxtLink to="/faq" style="display: flex;align-items: center;">
                      <q-item-section>Aklınızda soru kalmasın</q-item-section>
                    </NuxtLink>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <NuxtLink to="/aboutus" style="display: flex;align-items: center;">
                      <q-item-section>Hakkımızda</q-item-section>
                    </NuxtLink>
                  </q-item>
                </q-list>
              </q-menu>
            </li>
            <li>
              <NuxtLink to="/contact">
                Bize Ulaşın
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="mobile-show" ref="el">
          <nav class="mobile-menu" :class="{ 'hide-menu': !showMenu }">
            <button @click="showMenu = !showMenu" class="close">
              <Icon name="material-symbols:close-small-outline" />
            </button>

            <!-- <NuxtLink to="/">
              <div class="logo">
                EKS<span>LAND</span>
              </div>
            </NuxtLink> -->
            <ul>
              <NuxtLink to="/">
                <li>
                  Anasayfa
                </li>
              </NuxtLink>
              <NuxtLink to="/listings">
                <li>
                  İlanlar
                </li>
              </NuxtLink>
              <NuxtLink to="/invest">
                <li>
                  Nasıl yatırım yapabilirim?
                </li>
              </NuxtLink>
              <NuxtLink to="/aboutus">
                <li>
                  Hakkımızda
                </li>
              </NuxtLink>
              <NuxtLink to="/faq">
                <li>
                  Sıkça Sorulan Sorular
                </li>
              </NuxtLink>
              <NuxtLink to="/contact">
                <li>
                  Bize Ulaşın
                </li>
              </NuxtLink>
            </ul>
            <div class="contact">
              <div class="method">
                <NuxtLink to="Tel:+90 555 055 55 01">
                  <Icon name="material-symbols:call" />
                  <span>
                    +90 555 055 55 01
                  </span>
                </NuxtLink>
              </div>
              <div class="method">
                <NuxtLink to="https://maps.app.goo.gl/7dU1hVySNx1nTdPJ6">
                  <Icon name="material-symbols:location-on" />
                  <span>
                    İstanbul Türkiye
                  </span>
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(false)

const route = useRoute()

watch(
  () => route.params,
  () => {
    showMenu.value = false
  }
)

</script>


<style lang="scss" scoped></style>