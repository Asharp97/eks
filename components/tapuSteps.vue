<template>
  <div class="tapu-steps">
    <div class="steps-img-container mpi white-bg">
      <h1>3 Adımda EKSLAND ile Tapu Sahibi Olun</h1>
      <div class="images ">
        <div v-for="(step, n) in steps">
          <nuxt-img sizes="xs:192px sm:230.4px md:307.2px lg:381.3px" :src="step.img + `.png`" class="img" />
          <div class="t1 mpb mobile-hide">{{ step.title }}</div>
        </div>
      </div>
    </div>
    <div class="steps ">
      <div class="step mpi" v-for="(step, n) in steps">
        <div>
          <h3 class="mobile-show">{{ step.title }}</h3>
          <span class="t2 mixed-text" v-for="p in step.ps"> {{ p }}</span>
        </div>
      </div>
    </div>

    <div class="how-to-buy-button">
      <btn text="Detayları gör" icon="octicon:feed-plus-16" destination="invest" />
    </div>

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const steps = content.steps
</script>

<style lang="scss" scoped></style>