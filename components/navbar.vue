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
            <NuxtLink to="/contact">
              <li>
                Bize Ulaşın
              </li>
            </NuxtLink>
          </ul>
        </nav>
        <div class="mobile-show">
          <nav class="mobile-menu" :class="{ 'hide-menu': !showMenu }">
            <button @click="showMenu = !showMenu " class="close">
              <Icon name="material-symbols:close-small-outline" />
            </button>
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
            <NuxtLink to="/">
              <div class="logo">
                EKS<span>LAND</span>
              </div>
            </NuxtLink>
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
              <NuxtLink to="/contact">
                <li>
                  Bize Ulaşın
                </li>
              </NuxtLink>
            </ul>
          </nav>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(false)

</script>

<style lang="scss" scoped></style>