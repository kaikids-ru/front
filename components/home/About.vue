<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about__wrapper-img">
        <!-- <img class="about__img" src="/img/hero-about.png" alt="about" /> -->
      </div>
      <div class="about__wrapper">
        <h2 class="about__title">Сорокина Мария Александровна</h2>
        <span class="about__subtitle"
          >директор, учредитель, финансист, коуч, член "Опоры России"</span
        >
        <p class="about__description">Уважаемые родители!</p>
        <p class="about__description">
          С удовольствием приветствую Вас в нашем центре развития ,
          нейрокоррекции и логопедии" Кай Кидс".
        </p>
        <p class="about__description">
          Мы рады видеть каждого из Вас и гордимся тем, что Вы становитесь
          частью нашего сообщества.
        </p>
        <p class="about__description">
          Мы верим, что каждый ребенок обладает огромным потенциалом и силами
          для развития и счастливой жизни.
        </p>
        <p class="about__description">
          Наше видение основано на идее, что все дети имеют право на радость,
          интересное образование и поддержку, которые помогут раскрыть свой
          потенциал.
        </p>
        <p class="about__description">
          Мы стремимся ,чтобы каждый ребенок получил высококачественное развитие
          и поддержку в своем пути к личностному и профессиональному развитию.
        </p>

        <h2 class="about__title">НАША МИССИЯ:</h2>
        <p class="about__description">
          Создавать все необходимые условия для реализации прав ребенка на
          образование и поддержание приемлимого уровня знаний, самовыражения и
          личного прогресса, общение, дружбу и поддержку.
        </p>
        <h2 class="about__title">НАША ЦЕЛЬ :</h2>
        <p class="about__description">
          Создать общее образовательное , коррекционное, развивающее
          пространство для семей , воспитывающих особенных детей. Благодарим Вас
          за выбор " Кай Кидс", и пусть Ваше пребывание здесь будет насыщенным и
          вдохновляющим опытом!
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  padding: 20px 0 75px 0;
  &__description {
    max-width: 700px;
    margin-bottom: 32px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 24.8px; /* 161.301% */
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
  &__title {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 21.484px;
    font-style: normal;
    font-weight: 700;
    line-height: 29.7px; /* 138.24% */
  }
  &__subtitle {
    display: block;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 13.344px;
    font-style: normal;
    font-weight: 300;
    line-height: 21.7px; /* 162.623% */
  }
  &__wrapper-img {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
