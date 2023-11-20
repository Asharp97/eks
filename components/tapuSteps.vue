<template>
  <div class="tapu-steps">
    <div class="p1 mpi">3 aşamada yatırımınızı gerçekleştirin.</div>
    <div class="steps-img-container mpi white-bg">
      <h1>3 Adımda EKSLAND ile Tapu Sahibi Olun</h1>
      <div class="images ">
        <nuxt-img v-for="step in steps" :src="step.img + `.png`" class="img" />
      </div>
    </div>
    <div class="steps mpi">
      <div class="step" v-for="step in steps">
        <div class="t1 mpb">{{ step.title }}</div>
        <div class="t2" v-for="p in step.ps"> {{ p }}</div>
      </div>
    </div>

    <div class="how-to-buy-button">
      <btn text="Nasıl Satın Alırım" icon="octicon:feed-plus-16" destination="invest" />
    </div>

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const steps = content.steps
</script>

<style lang="scss" scoped></style>