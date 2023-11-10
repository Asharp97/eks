<template>
  <div class="faq gap">
    <section>
      <hero img="hero-faq" text="Aklınızda soru kalmasın." />
    </section>

    <section>
      <FaqComponent :faq="faq" />
    </section>
  </div>
</template>

<script setup>
import content from "../assets/content.json"
const faq = content.faq

</script>

<style lang="scss" scoped></style>