<template>
  <section id="reviews" class="reviews">
    <div class="reviews__content">
      <div class="container" style="position: relative">
        <button
          @click="handleClickPrev"
          :disabled="!swiperRef || swiperRef.activeIndex === 0"
          class="btn-reset reviews__custom-button-prev"
        ></button>
        <div class="reviews__swiper-pagination-progress">
          <div class="reviews__swiper-pagination-progress-bar"></div>
        </div>
        <button
          @click="handleClickNext"
          :disabled="!swiperRef || swiperRef.isEnd"
          class="btn-reset reviews__custom-button-next"
        ></button>
        <h2 class="reviews__title">Отзывы наших клиентов</h2>

        <CommonSwiper
          @instance="setSwiperInstance"
          :slide-card="reviewsCard"
          custom-button-next="reviews__custom-button-next"
          custom-button-prev="reviews__custom-button-prev"
        >
          <template #slide="{ item }">
            <img class="reviews__img" src="/img/galka1.png" />
            <div class="reviews__wrapper">
              <!-- <img :src="item.img" alt="img" class="reviews__img" /> -->
              <p class="reviews__description">
                {{ item.description }}
              </p>
              <div class="reviews__name">
                <h3 class="reviews__ttl">
                  {{ item.title }}
                </h3>
                <!-- <span class="reviews__sub">
                {{ item.subTitle }}
              </span> -->
              </div>
            </div>
            <div class="reviews__img-wrap">
              <img class="reviews__img" src="/img/galka1.png" />
            </div> </template
        ></CommonSwiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const swiperRef = ref<any>({})

const setSwiperInstance = (any: any) => {
  swiperRef.value = any
}

const handleClickPrev = () => {
  swiperRef.value.slidePrev()
}

const handleClickNext = () => {
  swiperRef.value.slideNext()
}
</script>

<style scoped lang="scss">
.reviews {
  padding-bottom: 60px;
  display: flex;
  justify-content: center;

  &__content {
    @media screen and (max-width: 1352px) {
      max-width: 800px !important;
    }
    @media screen and (max-width: 884px) {
      max-width: 600px !important;
    }
    @media screen and (max-width: 675px) {
      max-width: 400px !important;
    }
    @media screen and (max-width: 675px) {
      max-width: 300px !important;
    }
  }
  &__title {
    margin-bottom: 90px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 41.836px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px; /* 123.482% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 675px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  &__custom-button-next,
  &__custom-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5cbcd2;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 10;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    @media screen and (max-width: 1500px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (max-width: 675px) {
      width: 30px;
      height: 30px;
      top: 45%;
    }
  }

  &__custom-button-next {
    right: 0;
    background-image: url('/svg/arrow-2.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px 20px;
  }

  &__custom-button-prev {
    left: 0;
    background-image: url('/svg/arrow-1.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px 20px;
  }
  &__description {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 15.5px;
    font-style: normal;
    font-weight: 300;
    line-height: 24.8px; /* 160% */
    @media screen and (max-width: 1352px) {
      max-width: 700px;
    }
    @media screen and (max-width: 884px) {
      font-size: 14px;
    }
  }
  &__ttl {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 21.313px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.7px; /* 139.355% */
  }
  &__sub {
    display: block;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 13.453px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.7px; /* 161.301% */
  }
  &__img {
    margin-bottom: 30px;
    width: 90px;
    height: auto;
    &:last-child {
      margin-bottom: 0;
    }
    &-wrap {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__wrapper {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}
// .swiper {
//   @media screen and (max-width: 1352px) {
//     max-width: 800px !important;
//   }
</style>
