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
      <h2 class="center__title-2">
        Академия развития интеллекта " Кай Кидс" специализируется на работе с
        детьми, начиная с раннего возраста ( от 1 года) и до 14 лет.
      </h2>
      <ul class="list-reset center__list-2">
        <li class="center__item-2">Нейропсихологи</li>
        <li class="center__item-2">Специалисты по сенсорной интеграции</li>
        <li class="center__item-2">Логопеды-дефектологи</li>
        <li class="center__item-2">Нутрициологи</li>
        <li class="center__item-2">Психологи</li>
        <li class="center__item-2">Педагоги раннего развития</li>
        <li class="center__item-2">Педагоги широкого профиля</li>
      </ul>
      <p class="center__description-2">Работа со сложными диагнозами:</p>
      <p class="center__description-3">
        РАС ( аутизм), ЗПРР, ЗПР, ЗРР, дисграфия, дизартрия, алаллия, СДВГ,
        синдром Дауна и т.д
      </p>
      <p class="center__description-3">
        Также у нас можно пройти курс реабилитации, мы работаем с профильными
        благотворительными организациями и фондами города, оказывающими помощь в
        сборе средств на реабилитацию.
      </p>
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
  &__title-2 {
    margin-bottom: 50px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 22.688px;
    font-style: normal;
    font-weight: 700;
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
    margin-bottom: 50px;
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
  &__list-2 {
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item-2 {
    text-align: center;
    color: #000;
    font-family: 'Manrope';
    font-size: 17.578px;
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 884px) {
      font-size: 14px;
      line-height: normal;
    }
  }
  &__description-2 {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 22.688px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px; /* 158.678% */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: normal;
    }
    @media screen and (max-width: 884px) {
      font-size: 16px;
    }
  }
  &__description-3 {
    color: #000;
    font-family: 'Manrope';
    font-size: 18.688px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px; /* 158.678% */
    text-decoration: underline;
    @media screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: normal;
    }
    @media screen and (max-width: 884px) {
      font-size: 16px;
    }
  }
}
</style>
