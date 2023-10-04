<template>
  <div>
    <swiper :modules="modules" :speed="500" :keyboard="{ enabled: true }" :direction="'vertical'" :mousewheel="true"
      class="swipe">
      <swiper-slide class="frame1">
        <nuxt-img class="landingImage" src="eks/section-1.png" provider="imagekit" />
        <div class="content container">
          <div class="textDiv mt">
            <h1>EKSLAND ile Toprakta Büyüyen Yatırımlar</h1>
            <p>EKSLAND ile güvenli ve karlı arazi yatırımlarının gücünü keşfedin. 1,9 Euro'dan başlayan m2 fiyatlarıyla
              geniş arazi fırsatları yelpazemizi keşfedin. Hemen tapu devri ve sorunsuz online işlemler sizi bekliyor.
              Geleceğinizi güvence altına almak için bugün ilk adımı atın.</p>
          </div>
          <div class="contactDiv mt">
            <div class="contactInner">
              <div class="text">
                <h2>Hemen Bize Ulaşın</h2>
                <p>Ücretsiz bilgi edinin.</p>
              </div>
              <form action="">
                <input type="text" placeholder="Adınız, Soyadınız" v-model="name" name="name">
                <input type="text" placeholder="E-mail Adresiniz" v-model="email" name="email">
                <input type="number" placeholder="Telefon numaranız" v-model="telephone" name="telephone">
                <input type="text" placeholder="Hangi ülkede yaşıyorsunuz?" v-model="country" name="country">
              </form>
              <button @click="submit()">Benimle İletişime Geç</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="frame2">
        <div class="content2 container ">
          <h3>Popüler İlanlar</h3>
          <swiper :slidesPerView="3" :loop="true" :spaceBetween="44" :navigation="true" :modules="moduleLand"
            :scrollbar="{ hide: true }" class="swiperH">
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="land">
                <nuxt-img class="land-img" src="eks/land-1.png" provider="imagekit" />
                <div class="text">
                  <div class="title">
                    EKS Land ile Eskişehir’den Yatırımlık Arsa
                  </div>
                  <div class="measurement">
                    <Icon class="icon" name="arcticons:tapemeasure" />
                    <span>345 m</span>
                  </div>
                  <div class="buttons">
                    <button class="price">10.000 € </button>
                    <button class="seeDetail">Detayları Gör</button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </swiper-slide>
      <swiper-slide class="frame3">
        <div class="container frame">
          <h2>Neden <br> <span>EKSLAND’i tercih etmelisiniz?</span> </h2>
          <hr>
          <div class="cards">
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" class="icon" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
            <div class="card">
              <div class="title">
                <h4>Lorep Ipsum Dolor</h4>
                <Icon name="ph:plus-bold" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Ipsum purus sociis pellentesque purus.</p>
            </div>
          </div>
        </div>
      </swiper-slide>

    </swiper>


  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Keyboard, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

const modules = ref([Mousewheel, Keyboard])
const moduleLand = ref([Scrollbar, Navigation])


const loading = ref(false)

const name = ref()
const email = ref()
const telephone = ref()
const country = ref()

const supabase = useSupabaseClient()
const submit = async () => {
  try {
    loading.value = true
    const { data, err } = await supabase
      .from('contact')
      .insert({
        name: name.value,
        email: email.value,
        telephone: telephone.value,
        country: country.value
      })
      .select()
    if (data) console.log('succ')
    if (err) throw err
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loading.value = false
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";

.swipe {
  width: 100%;
  height: 100vh;

  .frame1 {
    position: relative;
    color: #fff;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100vh;
    }

    .landingImage {
      width: 100%;
      height: 100vh;
      position: absolute;
      z-index: -10;
      object-fit: cover;
    }

    .textDiv {
      width: 33%;
      height: 433px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 50px;
        font-weight: 600;
        line-height: 57px;
      }

      p {
        font-size: 22px;
        font-weight: 500;
        width: 120%;
        line-height: 36px;
      }

    }

    .mt {
      margin-top: 92px;
    }

    .contactDiv {
      width: 33%;
      height: 551px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.22);
      backdrop-filter: blur(55.5px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .contactInner {
        width: 80%;
        height: 487px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .text {
          h2 {
            font-weight: 600;
            font-size: 40px;
          }

          p {
            font-size: 20px;
            font-weight: 500;
          }
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;


          input {
            width: 100%;
            height: 49px;
          }
        }

        button {
          background-color: $primary;
          color: white;
          width: 100%;
          border-radius: 7px;
          font-size: 20px;
          font-weight: 500;
          height: 71px;


        }
      }
    }
  }

  .frame2 {
    color: $primary;

    .content2 {
      height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: column;

      h3 {
        font-size: 35px;
        font-weight: 600;
        line-height: 48px;
        margin-bottom: 37px;
      }


      .land {
        height: 428px;
        width: 357px !important;
        border-radius: 7px;
        background-color: #ffffff;

        .land-img {
          height: 245px;
          border-radius: 7px 7px 0px 0px;
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding-inline: 21px;
          padding-block: 16px;
          height: 146px;

          .title {
            color: #000;
            font-weight: 500;
            font-size: 20px;
          }

          .measurement {
            display: flex;
            gap: 8px;
            align-items: center;

            .icon {
              font-size: 25px;
              color: black;
            }

            span {
              font-size: 14px;

            }
          }

          .buttons {
            font-weight: 500;
            line-height: 48px;
            display: flex;
            width: 100%;
            justify-content: space-between;

            button {
              padding-inline: 33px;
              border-radius: 7px;
              border: 2px solid $primary;
            }

            .price {
              font-size: 20px;
              color: $primary;
            }

            .seeDetail {
              font-size: 15px;
              color: #fff;
              background-color: $primary;
            }
          }
        }

      }

    }
  }

  .white {
    background-color: #fff;
  }

  hr {
    margin-block: 1rem;
  }

  .frame3 {
    h2 {
      font-size: 35px;
      font-weight: 600;
      color: $primary;


      span {
        color: #4D4D4D;
      }
    }

    .cards {
      color: $primary;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .card {
        padding: 46px 26px;
        border-radius: 7px;
        border: 2px solid $primary;
        box-sizing: border-box;
        width: 400px;
        margin-top: 44px;

        &:hover {
          color: #FFF;
          background-color: $primary;
        }


        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;

          h4 {
            font-size: 20px;
            font-weight: 600;
          }


          .icon {
            font-size: 75px;
          }
        }

        p {
          font-size: 15px;
          margin-right: 59px;
        }
      }
    }

    .steps {
      display: flex;
      flex-wrap: wrap;

      .step {
        display: flex;
        align-items: center;
        width: clamp(300px, 33%, 900px);

        .text {
          display: flex;
          flex-direction: column;
          width: fit-content;

          h5 {
            font-size: 15px;
            color: $primary;
            font-weight: 600;
            line-height: 34px;
            margin-bottom: 12px;
          }

          h6 {
            font-size: 20px;
            color: #424242;
            font-weight: 600;
            margin-bottom: 46px;
          }

          p {
            font-size: 15px;
            color: #747474;
            line-height: 28.5px;
          }

        }

        .icon {
          font-size: 450px;
          color: #E2E2E2;
        }
      }
    }

  }

}
</style> 