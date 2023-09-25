<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script>
export default {

}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;

  body {
    .container {
      width: 90%;
      margin-inline: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    textarea,
    input {
      border: none;

      &:focus {
        outline: none
      }
    }

    background-color: #fff;
  }
}
</style>