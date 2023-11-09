<template>
  <div class="whyeskisehir gap">
    <section>
      <hero img="hero-whyeskisehir" text="Neden Eskişehir’i Tercih Etmeliyim?" />
    </section>

    <section class="container">

    </section>

    <section class="container">
      <onetwolayout :img1="layout[0].img1" :img2="layout[0].img2" :text="layout[0].text" :title="layout[0].title"
        :titlesub="layout[0].subtitle" />
        <!-- {{ layout[0][0].title }} -->
    </section>

    

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const layout = content.minerals

</script>

<style lang="scss" scoped></style>