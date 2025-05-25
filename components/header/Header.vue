<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__wrapper-link">
        <p class="header__title">Богданова 79, лит.5, ЖК Красный Аксай</p>
        <a href="tel:+79094391982" class="header__phone">+7 909 439-19-82</a>
        <ul class="list-reset header__list-link">
          <li
            v-for="(link, index) in linksHeader"
            :key="index"
            class="header__item-link"
          >
            <a :href="link.link" class="header__link"
              ><img :src="link.img" alt="link" class="header__img"
            /></a>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="header__logo-link"
        ><img class="header__logo" src="/img/logo.png" alt="logo"
      /></NuxtLink>
      <button class="btn-reset header__btn">
        <span class="header__btn-text" @click="goToSection('contacts')"
          >Записаться</span
        >
      </button>
    </div>
    <nav class="header__nav">
      <ul class="list-reset header__list-nav">
        <li
          v-for="(nav, index) in navHeader"
          :key="index"
          class="header__item-nav"
        >
          <NuxtLink
            v-if="nav.scrollSection"
            class="header__link-nav"
            @click.prevent="goToSection(nav.sectionId)"
            >{{ nav.title }}</NuxtLink
          >
          <!-- <a v-else :href="nav.link" class="header__link-nav">{{
            nav.title
          }}</a> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { goToSection } = useGoToSection()
</script>

<style scoped lang="scss">
.header {
  padding: 20px 50px 0 50px;
  margin: 0 auto;
  width: 100%;
  max-width: 1900px;
  font-size: 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 462px) {
      margin-bottom: 25px;
    }
  }
  &__wrapper-link {
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
      order: 2;
      align-items: center;
      justify-content: center;
    }
  }
  &__item-nav {
    @media screen and (max-width: 652px) {
      text-align: center;
    }
  }
  &__list-link {
    display: flex;
    gap: 7px;
  }
  &__logo-link {
    @media screen and (max-width: 1024px) {
      order: 1;
    }
  }
  &__title {
    color: #000;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 1024px) {
      text-align: center;
    }
    @media screen and (max-width: 652px) {
      font-size: 12px;
    }
  }
  &__phone {
    color: #000;
    font-family: 'Manrope';
    font-size: 14.75px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
  }
  &__btn {
    color: #fff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 13.672px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &-text {
      display: inline-block;
      padding: 12px 35px;
      border-radius: 30px;
      border: 3px solid #94dae9;
      background: #5cbcd2;
      @media screen and (max-width: 652px) {
        padding: 7px 25px;
      }
    }
    @media screen and (max-width: 1024px) {
      order: 3;
    }
    @media screen and (max-width: 652px) {
      font-size: 11.672px;
    }
  }
  &__list-nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    @media screen and (max-width: 762px) {
      gap: 10px;
    }
    @media screen and (max-width: 652px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 462px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__link-nav {
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.5px;
    text-decoration: none;
    @media screen and (max-width: 762px) {
      font-size: 14px;
    }
  }
  &__line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #068cc9;
  }
  &__logo {
    width: 200px;
    height: auto;
    @media screen and (max-width: 652px) {
      width: 150px;
    }
  }
  &__nav {
    margin-bottom: 30px;
  }
  &__img {
    width: 40px;
    height: 40px;
  }
}
</style>
