<template>
  <section class="center">
    <div class="container">
      <h2 class="center__title">Наш центр</h2>
      <p class="center__description">
        Каждый день мы упорно работаем, чтобы сделать жизнь наших клиентов проще
        и комфортнее, независимо от их возраста.
      </p>
      <div class="center__wrapper">
        <ul class="list-reset center__list">
          <li
            v-for="(item, index) in centerList"
            :key="index"
            class="center__item"
          >
            <img class="center__img" :src="item.img" alt="center" />
            <p class="center__item-title">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.center {
  padding-bottom: 100px;
  &__title {
    margin-bottom: 70px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 40.688px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px; /* 126.968% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 884px) {
      font-size: 26px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 675px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  &__description {
    margin: 0 auto;
    margin-bottom: 80px;
    max-width: 600px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 22.688px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px; /* 158.678% */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
      margin-bottom: 50px;
      line-height: normal;
    }
    @media screen and (max-width: 884px) {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
  &__item-title {
    color: #000;
    font-family: 'Manrope';
    font-size: 17.578px;
    font-style: normal;
    font-weight: 700;
    line-height: 27.9px; /* 158.72% */
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 884px) {
      font-size: 14px;
      line-height: normal;
    }
  }
  &__item {
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1024px) {
      align-items: center;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    max-width: 800px;
  }
  &__img {
    width: 70px;
    height: 60px;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
