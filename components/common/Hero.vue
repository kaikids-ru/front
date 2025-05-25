<template>
  <section
    class="hero"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.30) 100%), url(${img})`,
    }"
  >
    <div class="container">
      <div class="hero__wrapper">
        <span class="hero__span-title">{{ span }}</span>
        <h2 class="hero__title">{{ title }}</h2>
        <p class="hero__description">{{ description }}</p>

        <form class="hero__form">
          <input class="hero__input" type="text" placeholder="Имя" />
          <input
            class="hero__input"
            type="text"
            placeholder="+7 (999) 621-11-11"
          />
          <button class="btn-reset hero__btn">
            <span class="hero__btn-text">Записаться</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  span: string
  description?: string
  title: string
  img: string
}>()
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 100%;
  min-height: 1050px;
  width: 100%;
  @media screen and (max-width: 1352px) {
    min-height: 850px;
  }
  @media screen and (max-width: 884px) {
    min-height: 650px;
  }
  @media screen and (max-width: 675px) {
    min-height: 503px;
  }
  &__span-title {
    margin-bottom: 250px;
    display: block;
    color: #ffffff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.5px;
    @media screen and (max-width: 1352px) {
      margin-bottom: 150px;
    }
    @media screen and (max-width: 884px) {
      margin-bottom: 100px;
    }
    @media screen and (max-width: 675px) {
      margin-bottom: 50px;
      letter-spacing: normal;
    }
  }
  &__title {
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
    text-shadow: 0px 2px 50px #000;
    font-family: 'Manrope';
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 78.72px; /* 246% */
    @media screen and (max-width: 1352px) {
      font-size: 44px;
      line-height: 48.72px; /* 246% */
    }
    @media screen and (max-width: 884px) {
      font-size: 28px;
      line-height: normal;
    }
    @media screen and (max-width: 675px) {
      font-size: 22px;
    }
  }
  &__description {
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
    text-shadow: 0px 1px 50px #000;
    font-family: 'Manrope';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 43.4px; /* 310% */
  }
  &__form {
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 1352px) {
      flex-direction: column;
    }
  }
  &__input {
    width: 100%;
    padding: 20px;
    border-radius: 3px;
    background: #fff;
    color: #000;
    outline: none;
    @media screen and (max-width: 1352px) {
      padding: 10px;
      &::placeholder {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 884px) {
      padding: 7px;
      &::placeholder {
        font-size: 14px;
      }
    }
  }
  &__btn {
    padding: 19px 30px;
    border-radius: 30px;
    background: #5cbcd2;
    &-text {
      color: #fff;
      text-align: center;
      font-family: 'Manrope';
      font-size: 15.625px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media screen and (max-width: 1352px) {
        font-size: 13.625px;
      }
      @media screen and (max-width: 884px) {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 1352px) {
      padding: 15px 20px;
    }
    @media screen and (max-width: 884px) {
      padding: 10px 20px;
    }
  }
  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
