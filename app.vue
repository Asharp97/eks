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
    transition: 200ms;
    
    body {
      overflow: hidden;
      background-color: #EFEFEF;

      .swiper {
        width: 100%;
        height: 500px;

        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          top: auto !important;
          bottom: 17px !important;

          &::after {
            font-size: 30px;
          }
        }

        .swiper-button-prev {
          right: 80px !important;
          left: auto;
        }
      }

      .container {
        width: 90%;
        margin-inline: auto;
        overflow: visible;
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
        border-radius: 7px;
        padding-left: 24px;
        box-sizing: border-box;

        &::placeholder {
          color: #BDBDBD;
        }

        &:focus {
          outline: none
        }
      }

      .frame {
        height: 100vh;
        display: flex;
        // align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
</style>