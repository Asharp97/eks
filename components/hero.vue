<template>
  <div class="hero">
    <nuxt-img sizes="xs:640px sm:768px md:1024px lg:1280px xl:1536px xxl:1536px 2xl:2560px" class="landing-image "
      :src="`${img}.png`" />
    <div class="landing-page mpi container">
      <div class="landing-text">
        <div class="display">
          {{ text }}
        </div>
      </div>
      <div class="form-bg">
        <formComponent title="Hemen Bize Ulaşın" subtitle="Ücretsiz bilgi edinin." />
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(['text', 'img']);

</script>

<style lang="scss" scoped>

</style>




