<template>
  <section id="work" class="works">
    <div class="container">
      <h2 class="works__title">Наши направления</h2>
      <ul class="list-reset works__list">
        <li v-for="(item, index) in homeWorks" :key="index" class="works__item">
          <img class="works__img" :src="item.img" alt="item" />
          <h3 class="works__item-title">{{ item.title }}</h3>
          <ul class="list-reset works__item-items">
            <li
              v-for="(ul, index) in item.ul"
              :key="index"
              class="works__item-item"
            >
              {{ ul.text }}
            </li>
          </ul>
          <NuxtLink to="/" class="works__link">Подробнее</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.works {
  padding-bottom: 80px;
  &__title {
    margin-bottom: 90px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 41.344px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px; /* 124.952% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
    @media screen and (max-width: 675px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    height: auto;
    @media screen and (max-width: 1352px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 976px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 884px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 535px;
    &-title {
      min-height: 70px;
      color: #000;
      font-family: 'Manrope';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 32.76px; /* 117.459% */
      @media screen and (max-width: 1352px) {
        text-align: center;
      }
      @media screen and (max-width: 976px) {
        min-height: 70px;
      }
      @media screen and (max-width: 884px) {
        min-height: auto;
        margin-bottom: 20px;
      }
    }
    &-items {
      min-height: 210px;
      display: flex;
      flex-direction: column;
      color: #000;
      font-family: 'Manrope';
      font-size: 17.016px;
      font-style: normal;
      font-weight: 300;
      line-height: 27.9px; /* 163.967% */
      @media screen and (max-width: 1352px) {
        min-height: 170px;
      }
      @media screen and (max-width: 976px) {
        min-height: 120px;
      }
      @media screen and (max-width: 884px) {
        min-height: auto;
        margin-bottom: 20px;
      }
    }
    @media screen and (max-width: 1352px) {
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 884px) {
      min-height: auto;
    }
  }
  &__img {
    width: 270px;
    height: 342px;
    margin-bottom: 25px;
    border-radius: 20px;
  }
  &__item-item {
    position: relative;
    padding-left: 15px;
    &::before {
      content: '•'; // Или другой символ, например '✔' или '•'
      position: absolute;
      left: 0;
      color: #068cc9;
      font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      line-height: 30px;
    }
  }
  &__link {
    display: inline-block;
    text-align: center;
    padding: 10px 15px;
    border-radius: 4px;
    background: #5cbcd2;
    color: #fff;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    @media screen and (max-width: 1352px) {
      min-width: 100%;
    }
    @media screen and (max-width: 884px) {
      min-width: 300px;
    }
  }
}
</style>
