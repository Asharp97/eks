<template>
  <div class="about">
    <section>
      <hero img="hero-aboutus" text="Hakkımızda" />
    </section>
    <div class="gap">

      <section id="bizKimiz" class="bizkimiz">
        <div class="white-bg about-us">
          <div class="container mpi">

            <div class="p1 worries">
              Hakkımızda merak ettikleriniz.
            </div>
            <div class="display">Hakkımızda </div>
            <div class="text">

              <div class="p1">
                Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sapien vulputate at
                suscipit eget lectus dictum senectus eu. Sit commodo facilisi consequat eget. Quis mauris semper turpis
                etiam morbi ac nunc lorem. Mauris elementum varius proin erat neque nunc aliquam blandit. Magna a pharetra
                nunc odiom.
              </div>
              <div class="p1">Lorem ipsum dolor sit amet consectetur. Dui morbi elit sed vel placerat. Mollis sapien
                vulputate at suscipit eget lectus dictum senectus eu. Sit commodo facilisi consequat eget. </div>
            </div>
            <div class="display "> Biz kimiz </div>
          </div>
        </div>
        <div class="content container mpi">
          <div class="p1">Projelerimiz, portföyümüz, tecrübelerimiz...
            Tüm hizmetleri ile EKSLAND yatırımlarınıza öncü olmak için burada!</div>
          <div class="cols">
            <div class="column mpb">
              <nuxt-img class="img" src="nazim.png" />
              <div class="names">
                Nazım Ekşioğlu
              </div>
              <div class="p1">
                Lorem ipsum dolor sit amet consectetur. Imperdiet ultrices lobortis integer donec morbi ultrices. Nam
                tellus
                praesent hendrerit massa ut commodo varius sit egestas. Adipiscing Vitae platea diam egestas condimentum
                ullamcorper et sit
              </div>
            </div>
            <div class="column mpb">

              <nuxt-img class="img" src="nazim.png" />
              <div class="names">
                Nazım Ekşioğlu
              </div>
              <div class="p1">
                Lorem ipsum dolor sit amet consectetur. Imperdiet ultrices lobortis integer donec morbi ultrices. Nam
                tellus
                praesent hendrerit massa ut commodo varius sit egestas. Adipiscing Vitae platea diam egestas condimentum
                ullamcorper et sit
              </div>
            </div>

          </div>
        </div>
      </section>

      <h4> Hizmetlerimiz</h4>

      <section class="we-are-here">
        <div class="content white-bg container ">
          <div class="icons">
            <Icon name="subway:world-1" class="world icon" />
            <Icon name="la:hands-helping" class="help icon" />
            <Icon name="gis:poi-map" class="map icon" />
          </div>
          <div class="title">
            Yatırımınıza değer <br />
            katmak için<br>
            buradayız.
          </div>
          <hr>
          <div class="text">
            <div class="p1 half">Arazi yatırımı, her zaman güvenilir bir yatırım fırsatı olarak öne çıkmıştır. Şirketimiz,
              yıllardır bu alanda edinilen deneyim ve uzmanlık ile yatırımcıların arazi yatırımlarını daha da değerli hale
              getirme konusunda kendini kanıtlamıştır. Biz, yatırımlarınızı büyütmek ve güvence altına almak için
              buradayız.
            </div>
            <div class="half">
              <div class="p1">EKSLAND güvencesiyle</div> <br>
              <h2>

                50 senelik tecrübemiz ve bilgimiz ile yatırımınızı bizimle gerçekleştirin
              </h2>
            </div>
          </div>
          <div class="exp">
            <div class="p2">
              50 Yıllık Deneyim
            </div>
          </div>
          <slider :swiper="swiperdata" space="400" />
        </div>
      </section>

      <section class="services container mpi">
        <h4> Hizmetlerimiz</h4>
        <nuxt-img  src="tower.png" class="img" />
        <div class="cols">
          <div class="column">
            <div class="p1">
              <b> 14’ten fazla sözleşmeli fonlar. </b>
              <br>
              Her bir fonumuz, özenle seçilen ve yönetilen yatırım araçlarından oluşur ve uzman ekip tarafından dikkatle
              izlenir. Siz de şirketimizle çalışarak bu geniş fon portföyünden faydalanabilir ve yatırımınızı daha da
              güçlendirebilirsiniz. 14'ten fazla sözleşmeli fon seçeneğimiz ile yatırımlarınıza değer katmak için doğru
              adımı atın."
            </div>

          </div>
          <div class="column">
            <div class="p1">
              <b> 1300’den fazla aktif proje. </b>
              <br>
              Her bir fonumuz, özenle seçilen ve yönetilen yatırım araçlarından oluşur ve uzman ekip tarafından dikkatle
              izlenir. Siz de şirketimizle çalışarak bu geniş fon portföyünden faydalanabilir ve yatırımınızı daha da
              güçlendirebilirsiniz. 14'ten fazla sözleşmeli fon seçeneğimiz ile yatırımlarınıza değer katmak için doğru

            </div>

          </div>
        </div>
      </section>

      <section class="office container mpi">
        <div class="display">
          Sizleri Fikirtepe’deki <br> Satış Ofisimize
          <br>
          Bekliyoruz!
        </div>
        <div class="white-bg">
          <nuxt-img src="office.png" class="img" />
          <div class="p1">
            Fikirtepe'deki ofisimiz, sizi iş dünyasının dinamiklerini yakından deneyimlemeye davet ediyor. Modern,
            konforlu
            ve
            tam donanımlı bir çalışma ortamında buluşmak için hazırız. Sektör liderlerinin arasında yer almak, inovasyonu
            desteklemek ve yaratıcı projelere imza atmak için bizimle birlikte adım atın. Sizi ofisimizde ağırlamaktan
            mutluluk
            duyarız!"
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script setup>
import content from "../assets/content.json"
const swiperdata = content.oldpics
</script>

<style lang="scss" scoped></style>