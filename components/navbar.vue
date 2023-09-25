<template>
  <div>
    <div class="header-bg">
      <header class="container">
        <h1>EKS<span>LAND</span></h1>
        <div class="navigation">
          <div class="access">
            <Icon name="material-symbols:location-on" />
            İstanbul Türkiye
            <div class="call">
              <Icon name="ic:round-phone" />
              +90 555 055 55 01
            </div>
            <Icon name="flagpack:gb-ukm" />
            <!-- <Icon name="flagpack:tr" /> -->

            <Icon name="ph:caret-down" />
          </div>
          <nav>
            <ul>
              <li> Anasayfa </li>
              <li>Arsa & Araziler</li>
              <li>Nasıl Satın Alırım</li>
              <li>Hakkımızda</li>
              <li>Bize Ulaşın</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-bg {
  backdrop-filter: blur(55px);
  background: rgba(30, 30, 30, 0.22);
  width: 100%;

  header {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E2E2E2;

    h1 {
      letter-spacing: 12px;

      span {
        font-weight: 400;
      }
    }
    .navigation{

    }
  }
}
</style>