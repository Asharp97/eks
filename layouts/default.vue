<template>
  <div>
    <navbar class="navbar" />
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
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>