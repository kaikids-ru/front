<template>
  <div>
    <CommonHero
      :span="'Центр речевого развития Кайкидс'"
      :title="'Запишитесь на консультацию'"
      :description="''"
      :img="'/img/hero-img.jpg'"
    />
    <HomeAbout />
    <HomeQuestions />
    <HomeWorks />
    <HomeGallery />
    <HomeReviews />
    <HomeSpecialists />
    <HomeCenter />
    <CommonContacts />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Центр речевого развития Кайкидс',
  meta: [
    {
      name: 'description',
      content:
        'С удовольствием приветствую Вас в нашем центре развития , нейрокоррекции и логопедии" Кай Кидс".',
    },
    {
      property: 'og:title',
      content: 'Центр речевого развития Кайкидс',
    },
    {
      property: 'og:description',
      content:
        'С удовольствием приветствую Вас в нашем центре развития , нейрокоррекции и логопедии" Кай Кидс".',
    },
  ],
})
</script>

<style></style>
