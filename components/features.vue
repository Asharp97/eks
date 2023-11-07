<template>
  <div>
    <h1>Öne çıkan başlıklar</h1>
    <div class="features white-bg">

      <div class="swiper">
        <div class="slide" v-for="slider in sliders">
          <Icon :name="slider.icon" class="icon" />
        </div>
      </div>
      <Icon name="gridicons:play" @click="play()" class="play" />

    </div>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const sliders = content.sliders


const play = () => {
  const slide = document.getElementsByClassName('slide')
  
}
</script>

<style lang="scss" scoped></style>