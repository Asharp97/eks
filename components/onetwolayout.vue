<template>
  <div class="onetwolayout">

    <h1>{{ title }}</h1>
    <div class="display">
      {{ titlesub }}
    </div>
    <nuxt-img provider="imagekit" :src="img1 + `.png`" class="imgH" />
    <div class="imgs">
      <nuxt-img v-for='img in img2' provider="imagekit" :src="img + `.png`" class="imgV" />
    </div>
    <div class="text">
      <div class="p1" v-for="t in text">{{ t }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['img1', 'text', 'title', 'titlesub', 'img2']);

</script>

<style lang="scss" scoped></style>