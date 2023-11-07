<template>
  <div>
    <navbar />
    <slot />
    <foot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}
</style>