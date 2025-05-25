<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="gallery__title">Галерея</h2>
      <div class="gallery__wrapper">
        <div>
          <Galleria
            v-model:activeIndex="activeIndex"
            v-model:visible="displayCustom"
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="7"
            containerStyle="max-width: 850px"
            :circular="true"
            :fullScreen="true"
            :showItemNavigators="true"
            :showThumbnails="false"
          >
            <template #item="slotProps">
              <img
                :src="slotProps.item.itemImageSrc"
                :alt="slotProps.item.alt"
                style="
                  width: 100%;
                  display: block;
                  max-width: 600px;
                  height: auto;
                  display: flex;
                "
              />
            </template>
            <template
              #thumbnail="slotProps"
              style="
                width: 100%;
                display: block;
                max-width: 100%;
                display: flex;
              "
            >
              <img
                class="gallery__img"
                :src="slotProps.item.thumbnailImageSrc"
                :alt="slotProps.item.alt"
                style="display: block"
              />
            </template>
          </Galleria>

          <div v-if="images" class="gallery__wrap">
            <div v-for="(image, index) of images" :key="index">
              <img
                :src="image.thumbnailImageSrc"
                :alt="image.alt"
                style="cursor: pointer"
                @click="imageClick(index)"
                class="gallery__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Galleria from 'primevue/galleria'
const displayCustom = ref(false)
const activeIndex = ref<number>(0)

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
]
const imageClick = (index: number) => {
  activeIndex.value = index
  displayCustom.value = true
}
const images = [
  {
    itemImageSrc: '/img/gallery-1.jpg',
    thumbnailImageSrc: '/img/gallery-1.jpg',
    alt: 'Description for Image 8',
    title: 'Title 8',
  },
  {
    itemImageSrc: '/img/gallery-2.jpg',
    thumbnailImageSrc: '/img/gallery-2.jpg',
    alt: 'Description for Image 9',
    title: 'Title 9',
  },
  {
    itemImageSrc: '/img/gallery-3.jpg',
    thumbnailImageSrc: '/img/gallery-3.jpg',
    alt: 'Description for Image 10',
    title: 'Title 10',
  },
  {
    itemImageSrc: '/img/gallery-4.jpg',
    thumbnailImageSrc: '/img/gallery-4.jpg',
    alt: 'Description for Image 11',
    title: 'Title 11',
  },
  {
    itemImageSrc: '/img/gallery-5.jpg',
    thumbnailImageSrc: '/img/gallery-5.jpg',
    alt: 'Description for Image 12',
    title: 'Title 12',
  },
  {
    itemImageSrc: '/img/gallery-6.jpg',
    thumbnailImageSrc: '/img/gallery-6.jpg',
    alt: 'Description for Image 13',
    title: 'Title 13',
  },
  {
    itemImageSrc: '/img/gallery-7.jpg',
    thumbnailImageSrc: '/img/gallery-7.jpg',
    alt: 'Description for Image 14',
    title: 'Title 14',
  },
  {
    itemImageSrc: '/img/gallery-8.jpg',
    thumbnailImageSrc: '/img/gallery-8.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },

  {
    itemImageSrc: '/img/gallery-9.jpg',
    thumbnailImageSrc: '/img/gallery-9.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },

  {
    itemImageSrc: '/img/gallery-10.jpg',
    thumbnailImageSrc: '/img/gallery-10.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },

  {
    itemImageSrc: '/img/gallery-11.jpg',
    thumbnailImageSrc: '/img/gallery-11.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-12.jpg',
    thumbnailImageSrc: '/img/gallery-12.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-13.jpg',
    thumbnailImageSrc: '/img/gallery-13.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-14.jpg',
    thumbnailImageSrc: '/img/gallery-14.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-15.jpg',
    thumbnailImageSrc: '/img/gallery-15.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-16.jpg',
    thumbnailImageSrc: '/img/gallery-16.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-17.jpg',
    thumbnailImageSrc: '/img/gallery-17.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-18.jpg',
    thumbnailImageSrc: '/img/gallery-18.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-19.jpg',
    thumbnailImageSrc: '/img/gallery-19.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
  {
    itemImageSrc: '/img/gallery-20.jpg',
    thumbnailImageSrc: '/img/gallery-20.jpg',
    alt: 'Description for Image 15',
    title: 'Title 15',
  },
]
</script>

<style scoped lang="scss">
.gallery {
  padding-bottom: 120px;

  &__title {
    margin-bottom: 50px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 40.688px;
    font-style: normal;
    font-weight: 700;
    line-height: 51.66px;
    @media screen and (max-width: 1024px) {
      font-size: 28px;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  &__wrap {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media screen and (max-width: 884px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 675px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 70px;
  }
  &__thumbnails {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }
  &__items {
    width: 100%;
    height: 100%;
  }
  &__item {
    width: 100px;
    object-fit: cover;
    height: 100px;
    cursor: pointer;
  }
}
</style>
