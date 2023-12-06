<template>
  <div class="onetwolayout">

    <h1>{{ title }}</h1>
    <div class="display">
      {{ titlesub }}
    </div>
    <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1271px"	 :src="`${img1}.png`" class="imgH" v-if="static"/>
    <img :src="img1" alt="" class="imgH" v-if="!static">
    <div class="imgs">
      <img v-for='img in img2' :src="img" alt="" class="imgV" v-if="!static">
      <nuxt-img sizes="xs:320px sm:384px md:512px lg:635.5px" v-for='img in img2' :src="img + `.png`" class="imgV" v-if="static"/>
    </div>
    <div class="text">
      <div class="p1" v-for="t in text">{{ t }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['img1', 'text', 'title', 'titlesub', 'img2','static']);

</script>

<style lang="scss" scoped></style>