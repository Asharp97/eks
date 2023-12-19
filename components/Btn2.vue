<template>
  <div>
    <NuxtLink :to="`${destination ? '/' + destination : ''}`">
      <button type="button" :class="{ 'inv': inv }">
        {{ text }}
        <slot />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['text', 'destination', 'inv']);
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: $orange;
  border: 2px solid $orange;
  color: white;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: clamp(0.9375rem, 0.841rem + 0.5149vw, 1.25rem);
  font-weight: 500;
  white-space: nowrap;
}

button {
  &:active {
    background-color: $lightGray;
    border: 2px solid $lightGray;
    color: white;
  }

}

.inv {
  color: $orange ;
  background-color: white;
}
</style>