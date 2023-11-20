<template>
  <div class="navbar">
    <div class="header-bg">
      <div class="header container">
        <Icon name="game-icons:hamburger-menu" class="hamburger" />

        <NuxtLink to="/">
          <div class="logo">
            EKS<span>LAND</span>
          </div>
        </NuxtLink>

        <nav class="mobile-hide">
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
</template>

<script setup>

</script>

<style lang="scss" scoped></style>