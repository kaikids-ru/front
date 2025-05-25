<template>
  <section id="specialists" class="specialists">
    <div class="container">
      <h2 class="specialists__title">Наши специалисты</h2>
      <ul class="list-reset specialists__list">
        <li
          v-for="(item, index) in specialistsList"
          :key="index"
          class="specialists__item"
          @click="openModal(item)"
        >
          <img class="specialists__img" :src="item.img" alt="img" />
          <h3 class="specialists__item-title">{{ item.title }}</h3>
          <ul class="list-reset specialists__item-items">
            <li
              v-for="(ul, index) in item.ul"
              :key="index"
              class="specialists__item-item"
            >
              {{ ul.text }}
            </li>
          </ul>
        </li>
      </ul>
      <CommonModal
        v-if="isModalOpen && selectedSpecialist"
        :title="selectedSpecialist.title"
        :description="selectedSpecialist.description"
        :onClose="closeModal"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const isModalOpen = ref(false)

const selectedSpecialist = ref<{ title: string; description: string } | null>(
  null
)

const openModal = (item: { title: string; description: string }) => {
  selectedSpecialist.value = item
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped lang="scss">
.specialists {
  padding-bottom: 75px;
  &__title {
    margin-bottom: 100px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 41.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px; /* 125.45% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 884px) {
      margin-bottom: 30px;
      font-size: 26px;
    }
  }
  &__item {
    cursor: pointer;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media screen and (max-width: 884px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 675px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item-title {
    margin-bottom: 10px;
    color: #ff8562;
    text-align: center;
    font-family: 'Manrope';
    font-size: 21.313px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.7px; /* 139.355% */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (max-width: 884px) {
      line-height: normal; /* 139.355% */
    }
  }
  &__img {
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 5%;
    width: 100%;
    max-width: 300px;
    height: auto;
  }
  &__item-item {
    text-align: center;
    color: #7a7a7a;
    font-family: 'Inter';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.7px; /* 165.333% */
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 884px) {
      line-height: normal; /* 139.355% */
    }
  }
}
</style>
