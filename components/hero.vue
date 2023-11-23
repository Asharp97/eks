<template>
  <div class="hero">
    <nuxt-img   class="landing-image " :src="`${img}.png`" />
    <div class="landing-page mpi container">
      <div class="landing-text">
        <div class="display">
          {{ text }}
        </div>
      </div>
      <div class="form-bg">
        <Form title="Hemen Bize Ulaşın" subtitle="Ücretsiz bilgi edinin." />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['text', 'img']);

</script>

<style lang="scss" scoped></style>




