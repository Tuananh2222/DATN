<template>
  <div class="container-main">
    <div class="banner-wrapper">
      <div class="banner-slide">
        <Swiper
          class="container-swipper"
          :slides-per-view="1"
          :modules="[Autoplay, EffectFade]"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :effect="'fade'"
          :fade="true"
          :fade-effect="{
            crossFade: false,
          }"
          :speed="1000"
        >
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="~/public/image/slide-01.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="~/public/image/slide-02.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img-banner">
              <img class="img-slide" src="~/public/image/slide-03.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="banner-item">
          <div class="box-banner-text">
            <div class="box-text">
              <h1>Your Ideal Retreat</h1>
              <div class="slider-subtitle-group">
                <h4>Indulge in our top-notch</h4>
                <h3>Spa resort</h3>
              </div>
            </div>
            <div class="btn-wrapper">
              <CButton
                :label="'Learn more'"
                :class-name="'button-effect-ujarak button-lg button-white-outline button-square'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hotel-booking-form">
      <h3>Book a Room</h3>
      <!-- RD Mailform-->
      <div class="rd-mailform">
        <div class="cell-lg-12 cell-md-4">
          <TextBox :label="'Your Name'" :placeholder="'Your Full Name'" />
        </div>
        <div class="cell-sm-6">
          <p class="text-uppercase">Arrival</p>
          <!-- <div class="form-wrap">
              <label class="form-label form-label-icon" for="date-in"
                ><span class="icon icon-primary fa-calendar"></span><span>Check-in Date</span></label
              >
              <input
                class="form-input"
                id="date-in"
                data-time-picker="date"
                type="text"
                name="date"
                data-constraints="@Required"
              />
            </div> -->
        </div>
        <div class="cell-sm-6">
          <p class="text-uppercase">Departure</p>
          <!-- <div class="form-wrap">
              <label class="form-label form-label-icon" for="date-out"
                ><span class="icon icon-primary fa-calendar"></span><span>Check-out Date</span></label
              >
              <input
                class="form-input"
                id="date-out"
                data-time-picker="date"
                type="text"
                name="date"
                data-constraints="@Required"
              />
            </div> -->
        </div>
        <div class="cell-xs-6">
          <p class="text-uppercase">Adults</p>
          <CDropdown :style="'width-full'" :fluid="true" />
        </div>
        <div class="cell-xs-6">
          <p class="text-uppercase">Children</p>
          <CDropdown :style="'width-full'" :fluid="true" />
        </div>
        <div class="btn-wrapper">
          <CButton
            :label="'check availability'"
            class-name="button-primary button-square button-block button-effect-ujarak"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="content-video">
    <iframe
      width="1020"
      height="525"
      src="https://www.youtube.com/embed/IijKvP-vJDo?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="box-text-about">
      <div class="section-wrap-content-var-1-inner">
        <h2>About Us</h2>
        <p>
          Committed to everyone seeking energy and excitement, we offer endless possibilities to unwind and reenergize.
        </p>
        <div class="group">
          <dl class="list-desc">
            <dt>Weekdays:</dt>
            <dd><span>8:00–20:00</span></dd>
          </dl>
          <dl class="list-desc">
            <dt>Weekends:</dt>
            <dd><span>9:00–18:00</span></dd>
          </dl>
        </div>
        <CButton
          :label="'book now'"
          :class-name="'button-effect-ujarak button-lg button-secondary-outline button-square'"
        />
      </div>
    </div>
  </div>
  <div class="guide-content">
    <div class="shell">
      <div class="text-guide">
        <h3>Indoor Hotel Pool</h3>
        <p>
          The indoor heated pool has vaulted wood beam ceilings. The whirlpool features bay windows and overlooks the
          pond and the north face of the local beauty spot. For the safety and health reasons, children must be
          accompanied by an adult when visiting the pool.
        </p>
        <p>
          The serene pool at Royal Villas spa resort and hotel boasts sleek décor that features striking
          floor-to-ceiling teak columns set against a cool black tile floor. Poolside dining is also available,
          featuring a selection of dishes from any cuisine you desire that are both healthy and delicious. Daily aqua
          aerobics classes help keep guests fit while on the road.
        </p>
        <div class="btn-wrapper">
          <CButton
            :label="'read more'"
            :class-name="'button-primary button button-square button-effect-ujarak button-lg'"
          />
        </div>
      </div>
      <div class="img-guide">
        <div class="box-outline box-outline__mod-1">
          <figure>
            <img src="~/public/image/img-content.jpg" alt="" width="546" height="516" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CardProduct from '~~/components/generals/cardProduct.vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper'
import TextBox from '~~/components/elements/textBox.vue'
definePageMeta({
  layout: 'default',
})
</script>

<style lang="scss" scoped>
.container-main {
  display: flex;
  padding: 0 20px;
  .banner-wrapper {
    position: relative;
    width: 1350px;
    height: 657px;
    @include sp {
      margin-top: -79px;
      width: 100%;
    }

    .banner-slide {
      position: relative;
      display: flex;
      align-items: center;
      .img-banner {
        box-sizing: border-box;
        @include sp {
          width: 100%;
        }
        .img-slide {
          width: 1320px;
          height: 657px;
          background-size: cover;
          object-fit: cover;
        }
      }
      .banner-item {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        z-index: 2;
        @include sp {
        }
        .box-banner-text {
          display: flex;
          flex-direction: column;
          width: 96%;
          @include sp {
            width: 94.6%;
          }
          .box-text {
            color: $white;
            h1 {
              font-weight: 700;
              font-size: 95px;
            }
            .slider-subtitle-group {
              margin-left: 58px;
              h4 {
                font-size: 24px;
                line-height: 1.25;
                font-weight: 300;
              }
              h3 {
                font-weight: 700;
                font-size: 36px;
              }
            }
          }
        }
      }
    }
  }

  .hotel-booking-form {
    width: 100%;
    text-align: left;
    padding: 70px 50px 60px;
    color: #000;
    background: #e3e3e3;
    @include sp {
      padding: 30px 20px 30px;
    }
  }

  .hotel-booking-form h3 {
    font-size: 36px;
    color: inherit;
    font-weight: 700;
  }

  .hotel-booking-form .form-label {
    left: 22px;
    letter-spacing: 0.05em;
  }

  .hotel-booking-form .form-input {
    padding-left: 22px;
    background-color: #fff;
  }

  .hotel-booking-form .select2-container .select2-choice {
    padding-left: 0;
    padding-right: 0;
    background: #fff;
  }

  .hotel-booking-form .select2-arrow b:before {
    color: #cbcbcb;
  }
}
.content-video {
  display: flex;
  padding: 55px 20px 70px 20px;
  .box-text-about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 30px;
    background-color: #8f859e;
    margin-left: 30px;
    color: $white;
    .section-wrap-content-var-1-inner {
      max-width: 420px;
      h2 {
        font-size: 60px;
        font-weight: 700;
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
      .group {
        display: flex;
        .list-desc {
          margin-right: 10px;
          dt {
            color: #dcd1d5;
          }
        }
      }
    }
  }
}
.guide-content {
  background-color: #f3f3f3;
  .shell {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 75px;
    padding-bottom: 90px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    .text-guide {
      margin-top: 50px;
      pointer-events: auto;
      max-width: 41.66667%;
      h3 {
        line-height: 1;
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 0;
        color: #151515;
      }
      p {
        font-size: 14px;
        margin-top: 20px;
      }
    }
    .img-guide {
      max-width: 50%;
      margin-left: 50px;
      .box-outline {
        width: 543px;
        height: 523px;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding-top: 20px;
      }
      .box-outline:before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        border: 5px solid #dcd1d5;
        content: '';
        transform: translate(-12px, 5px);
        transition: 550ms ease-in-out;
      }
      .box-outline__mod-1:before {
        left: 27px;
        @include sp {
          left: 6px;
        }
      }
    }
  }
}
.list-desc {
  display: flex;
  dd {
    margin-inline-start: 10px;
    @include sp {
      margin-inline-start: 5px;
    }
  }
}
.btn-wrapper {
  margin-top: 40px;
}
</style>
