<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">Термины и определения речевых нарушений</h1>
      <p class="hero__description">
        Ниже мы приводим список всех существующих определений терминов нарушений
        речи.
      </p>
      <ul class="list-reset hero__list">
        <li class="hero__item" v-for="(item, index) in terms" :key="index">
          <h3 class="hero__item-title">{{ item.title }}</h3>
          <p class="hero__item-description">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.hero {
  padding: 30px 0;
  &__title {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }
  &__description {
    margin-bottom: 40px;
    text-align: center;
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 400;
  }
  &__item-title {
    text-align: center;
    margin-bottom: 10px;
    color: #ff8562;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 700;
  }
  &__item-description {
    color: #000;
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 400;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 694px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
  }
}
</style>
