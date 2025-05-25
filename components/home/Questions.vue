<template>
  <section class="questions">
    <div class="container">
      <div class="questions__wrapper-content">
        <h2 class="questions__title">
          Сталкивались ли Вы с подобными проблемами?
        </h2>
        <p class="questions__description">
          Если Вы ответили "ДА" хотя бы на один вопрос, то мы с нетерпением ждем
          Вас!
        </p>
      </div>
      <ul class="list-reset questions__list">
        <li
          v-for="(item, index) in homeQuestions"
          :key="index"
          class="questions__item"
        >
          <div class="questions__item-number">
            <span class="questions__item-number-text"> {{ item.number }}</span>
          </div>
          <p class="questions__item-text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.questions {
  padding-bottom: 75px;
  &__title {
    margin-bottom: 44px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px; /* 123% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 675px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  &__description {
    max-width: 470px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 22.875px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px; /* 157.377% */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: normal; /* 157.377% */
    }
    @media screen and (max-width: 675px) {
      font-size: 16px;
    }
  }
  &__wrapper-content {
    margin-bottom: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px) {
      margin-bottom: 50px;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 884px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 675px) {
      gap: 30px;
    }
  }
  &__item {
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1024px) {
      align-items: center;
    }
    @media screen and (max-width: 675px) {
      justify-content: center;
    }
  }
  &__item-text {
    color: #000;
    font-family: 'Manrope';
    font-size: 17.719px;
    font-style: normal;
    font-weight: 700;
    line-height: 27.9px; /* 157.46% */
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
    @media screen and (max-width: 675px) {
      font-size: 16px;
    }
  }
  &__item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 19px 0px;
    background: #5cbcd2;
    width: 60px;
    height: 60px;
    flex-shrink: 0; // Чтобы не сжималось
    @media screen and (max-width: 675px) {
      display: none;
    }
  }
  &__item-number-text {
    color: #fff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 300% */
  }
}
</style>
