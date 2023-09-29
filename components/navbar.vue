<template>
  <div>
    <div class="header-bg">
      <header class="container">
        <NuxtLink to="/">
          <h1>EKS<span>LAND</span></h1>
        </NuxtLink>
        <div class="navigation">
          <div class="access">
            <div class="location">
              <Icon name="material-symbols:location-on" />
              İstanbul Türkiye
            </div>
            <div class="call">
              <Icon name="ic:round-phone" />
              +90 555 055 55 01
            </div>
            <div class="lang">
              <Icon name="flagpack:gb-ukm" />
              <span>UK</span>
              <!-- <Icon name="flagpack:tr" /> -->
              <Icon name="ph:caret-down" />
            </div>
          </div>
          <nav>
            <ul>
              <NuxtLink to="/">
                <li>Anasayfa</li>
              </NuxtLink>
              <NuxtLink to="/land">
                <li>Arsa & Araziler</li>
              </NuxtLink>
              <NuxtLink to="/howtobuy">
                <li>Nasıl Satın Alırım</li>
              </NuxtLink>
              <NuxtLink to="/aboutus">
                <li>Hakkımızda</li>
              </NuxtLink>
              <NuxtLink to="/contact">
                <li>Bize Ulaşın</li>
              </NuxtLink>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
      font-family: 'Roboto', sans-serif;
      font-size: 45px;
      font-weight: 700;
      letter-spacing: 12px;

      span {
        font-weight: 400;
      }
    }

    .navigation {
      width: 66%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .access {
        display: flex;
        font-size: 15px;
        font-weight: 500;
        line-height: 48px;
        gap: 30px;

        .icon {
          font-size: 20px;
          margin-bottom: 4px;

        }
      }

      nav {
        width: 100%;

        ul {
          display: flex;
          justify-content: space-between;

          li {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 48px;
          }
        }
      }
    }
  }
}
</style>