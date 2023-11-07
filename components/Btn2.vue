<template>
  <div>
    <NuxtLink :to="`${destination ? '/' + destination : ''}`">
      <button>
        {{ text }}
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['text', 'destination']);
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

button {
  background-color: $orange;
  color: white;
  width: 100%;
  border-radius: 7px;
  font-size: 20px;
  font-weight: 500;
  height: 71px;
}
</style>