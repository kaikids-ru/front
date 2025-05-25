<template>
  <footer class="footer">
    <div class="container">
      <ul class="list-reset footer__list">
        <li class="footer__item">
          <img class="footer__img" src="/img/logo.png" alt="logo" />
          <ul class="list-reset footer__list-link">
            <li
              v-for="(link, index) in linksHeader"
              :key="index"
              class="footer__item-link"
            >
              <a :href="link.link" class="footer__link"
                ><img :src="link.img" alt="link" class="footer__links-img"
              /></a>
            </li>
          </ul>
          <span class="footer__span">© 2023 Кайкидс</span>
        </li>
        <li class="footer__item-wrapper">
          <h3 class="footer__item-title">Навигация</h3>
          <ul class="list-reset footer__list-wrapper">
            <li class="footer__item-link-text">
              <a
                @click.prevent="goToSection('sectionId')"
                class="footer__link-text"
                >О нас</a
              >
            </li>
            <li class="footer__item-link-text">
              <a @click.prevent="goToSection('work')" class="footer__link-text"
                >Направления</a
              >
            </li>
            <li class="footer__item-link-text">
              <a
                @click.prevent="goToSection('specialists')"
                class="footer__link-text"
                >Специалисты</a
              >
            </li>
            <li class="footer__item-link-text">
              <a
                @click.prevent="goToSection('reviews')"
                class="footer__link-text"
                >Отзывы</a
              >
            </li>
            <li class="footer__item-link-text">
              <a
                @click.prevent="goToSection('gallery')"
                class="footer__link-text"
                >Галерея</a
              >
            </li>
            <li class="footer__item-link-text">
              <a
                @click.prevent="goToSection('contacts')"
                class="footer__link-text"
                >Контакты</a
              >
            </li>
          </ul>
        </li>
        <li class="footer__item-wrapper">
          <h3 class="footer__item-title">Направления</h3>
          <ul class="list-reset footer__list-wrapper">
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Развивающие занятия</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text">Логопедия</NuxtLink>
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Английский язык</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Занятия с психологом</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text">Скорочтение</NuxtLink>
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Пластилинография</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Сенсорная интеграция</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text"
                >Занятия с логопедом</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/" class="footer__link-text">Каллиграфия</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="footer__item-wrapper">
          <h3 class="footer__item-title">Наш центр</h3>
          <ul class="list-reset footer__list-wrapper">
            <li class="footer__item-link-text">
              <NuxtLink to="/rules" class="footer__link-text"
                >Правила центра</NuxtLink
              >
            </li>
            <li class="footer__item-link-text">
              <NuxtLink to="/terms" class="footer__link-text"
                >Термины и определения</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
      <div class="footer__site" style="display: flex; justify-content: center">
        <a href="https://primedev.pro/" class="footer__span" target="_blank"
          >Разработка сайта — PRIMEDEV.PRO</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { goToSection } = useGoToSection()
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid #e5e5e5;
  padding: 50px 0;
  @media screen and (max-width: 652px) {
    padding: 30px 0;
  }
  &__img {
    width: 200px;
    height: auto;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 652px) {
      align-items: flex-start;
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    @media screen and (max-width: 762px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 656px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 652px) {
      grid-template-columns: repeat(1, 1fr);
      justify-content: flex-start;
      align-items: flex-start;
      gap: 30px;
    }
  }
  &__list-link {
    display: flex;
    gap: 7px;
  }
  &__list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 652px) {
    }
  }
  &__link-text {
    cursor: pointer;
    text-decoration: underline;
    color: #000;
    font-family: 'Manrope';
    font-size: 13.672px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.7px; /* 158.72% */
  }
  &__item-title {
    margin-bottom: 10px;
    color: #525252;
    font-family: 'Manrope';
    font-size: 15.875px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.6px; /* 136.063% */
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__links-img {
    width: 40px;
    height: 40px;
  }
  &__span {
    display: inline-block;
    margin-top: 30px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 13.672px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.7px; /* 158.72% */
  }
}
</style>
