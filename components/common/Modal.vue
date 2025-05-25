<template>
  <div class="modal" @click.self="onClose">
    <div class="modal__card">
      <img class="modal__img" src="/img/logo.png" alt="logo" />
      <h3 class="modal__title">{{ title }}</h3>
      <p class="modal__description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  onClose: () => void
}>()
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99998;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  &__card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 15px;
    width: 100%;
    width: 600px;
    min-height: 350px;
    padding: 45px;
    z-index: 1;
    background-color: #eff6fe;
    box-shadow: 0px 0px 17px -7px rgba(34, 60, 80, 0.2);
    border-radius: 30px;
    @media screen and (max-width: 884px) {
      width: 500px;
      padding: 25px;
    }
    @media screen and (max-width: 675px) {
      min-height: auto;
      width: 300px;
      padding: 10px;
    }
  }
  &__img {
    margin-bottom: 30px;
    width: 300px;
    height: auto;
    @media screen and (max-width: 884px) {
      width: 200px;
    }
  }
  &__title {
    margin-bottom: 20px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 24px;
    font-style: normal;
    @media screen and (max-width: 884px) {
      font-size: 18px;
    }
  }
  &__description {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    @media screen and (max-width: 884px) {
      font-size: 12px;
    }
  }
}
</style>
