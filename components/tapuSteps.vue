<template>
  <div class="tapu-steps mpi white-bg">
    <div class="steps-img-container ">
      <h1>3 Adımda EKSLAND ile Tapu Sahibi Olun</h1>
      <div class="images ">
        <div class="img-wrapper" v-for="(step, n) in steps" :class="{'mobile-hide':n==2}">
          <nuxt-img sizes="xs:192px sm:230.4px md:307.2px lg:381.3px" :src="step.img + `.png`" class="img"  />
          <div class="t1 mpb mobile-hide">{{ step.title }}</div>
        </div>
      </div>
      <nuxt-img sizes="xs:192px sm:230.4px md:307.2px lg:381.3px" :src="steps[2].img + `.png`" class="img thirdImage mobile-show"  />
    </div>
    <div class="steps ">
      <div class="step" v-for="(step, n) in steps">
        <div>
          <h6 class="mobile-show">{{ step.title }}</h6>
          <span class="p2 mixed-text" v-for="p in step.ps"> {{ p }}</span>
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