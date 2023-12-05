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
  border-radius: 7px;
  font-size: 20px;
  font-weight: 500;
}

button {
  &:active {
    background-color: $gray;
    border: 2px solid $gray;

  }

}

.inv {
  color: $orange ;
  background-color: white;
}
</style>