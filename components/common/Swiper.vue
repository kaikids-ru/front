<template>
  <ClientOnly>
    <Swiper
      :modules="[Navigation]"
      space-between="300"
      :loop="true"
      :navigation="{
        nextEl: `.${customButtonNext}`,
        prevEl: `.${customButtonPrev}`,
      }"
      class="slider__buttons"
      @swiper="initSwiper"
    >
      <SwiperSlide v-for="(item, index) in slideCard" :key="index">
        <div class="slider__wrapper">
          <slot name="slide" :item="item" :index="index" />
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperInstance = ref<any>({})
const emit = defineEmits(['instance'])

const initSwiper = (instance: any) => {
  swiperInstance.value = instance
  emit('instance', instance)
}
defineProps<{
  slideCard?: any[]
  customButtonNext?: string
  customButtonPrev?: string
  breakpoints?: any
}>()
</script>
