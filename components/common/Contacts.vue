<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__wrapper-from">
          <h2 class="contacts__title">Не нашли то, что искали?</h2>
          <p class="contacts__description">
            Заполните форму, и наш специалист свяжется с Вами в ближайшее время.
          </p>

          <Form
            :validation-schema="validationSchema"
            class="contacts__form"
            id="form"
            name="form"
            @submit="sendForm"
          >
            <div class="contacts__form-wrapper">
              <div class="contacts__input-field">
                <div class="contacts__wrapper-input">
                  <label for="name" class="contacts__label">Ваше имя</label>
                  <Field v-slot="{ field, meta, errorMessage }" name="name">
                    <input
                      v-bind="field"
                      type="text"
                      id="name"
                      :placeholder="
                        meta.touched && errorMessage ? errorMessage : 'Мария'
                      "
                      class="contacts__input"
                      :class="{
                        'contacts__input--error': meta.touched && !meta.valid,
                      }"
                    />
                  </Field>
                </div>
                <div class="contacts__wrapper-input">
                  <label for="phone" class="contacts__label">Телефон</label>
                  <Field v-slot="{ field, meta, errorMessage }" name="phone">
                    <input
                      v-bind="field"
                      type="phone"
                      id="phone"
                      :placeholder="
                        meta.touched && errorMessage
                          ? errorMessage
                          : '+7 (999) 999-99-99'
                      "
                      class="contacts__input"
                      :class="{
                        'contacts__input--error': meta.touched && !meta.valid,
                      }"
                    />
                  </Field>
                </div>
              </div>
              <div class="contacts__input-field">
                <div class="contacts__wrapper-input">
                  <label for="email" class="contacts__label">E-mail</label>
                  <Field v-slot="{ field, meta, errorMessage }" name="email">
                    <input
                      v-bind="field"
                      type="email"
                      id="email"
                      :placeholder="
                        meta.touched && errorMessage ? errorMessage : 'E-mail'
                      "
                      class="contacts__input"
                      :class="{
                        'contacts__input--error': meta.touched && !meta.valid,
                      }"
                    />
                  </Field>
                </div>
                <div class="contacts__wrapper-input">
                  <label for="text" class="contacts__label"
                    >Ваши пожелания</label
                  >
                  <textarea
                    v-model="textarea"
                    name="text"
                    id="text"
                    placeholder="Пожелания"
                    class="contacts__textarea"
                  />
                </div>
              </div>
            </div>
            <p class="contacts__text">
              Нажимая на кнопку вы даёте согласие на обработку персональных
              данных в соответствии с
              <a class="contacts__policy" href="/doc/policy.pdf" target="_blank"
                >политикой конфиденциальности</a
              >
            </p>
            <button
              form="form"
              type="submit"
              class="btn-reset contacts__button"
            >
              <span class="contacts__btn-text">Отправить</span>
            </button>
          </Form>
        </div>
        <div class="contacts__maps">
          <ClientOnly>
            <CommonMap />
          </ClientOnly>
        </div>
        <div class="contacts__wrapperGallery">
          <ul class="list-reset contacts__address">
            <li class="contacts__item">
              <span class="contacts__item-color">Адрес:</span>
              <div class="contacts__wrap-cont">
                <img class="contacts__pic" src="/img/address.png" />
                <p class="contacts__items">
                  г. Ростов-на-Дону , Богданова, 79, лит.5, ЖК Красный Аксай
                </p>
              </div>
            </li>
            <li class="contacts__item">
              <span class="contacts__item-color">Рабочий телефон :</span>
              <div class="contacts__wrap-cont">
                <img class="contacts__pic" src="/img/phone.png" /><a
                  href="tel:+79094391982"
                  class="contacts__items"
                >
                  +7 909 439-19-82</a
                >
              </div>
            </li>
            <li class="contacts__item">
              <span class="contacts__item-color"
                >Руководитель Мария Александровна‬:</span
              >
              <div class="contacts__wrap-cont">
                <img class="contacts__pic" src="/img/phone.png" />
                <a href="tel:+79094391982" class="contacts__items"
                  >+7 962 928-09-06</a
                >
              </div>
            </li>
          </ul>
          <div class="contacts__gallery">
            <Galleria
              :value="contactsGallery"
              :numVisible="5"
              containerStyle="max-width: 650px"
              :showThumbnails="false"
              :showIndicators="true"
              :changeItemOnIndicatorHover="true"
            >
              <template #item="slotProps">
                <img
                  :src="slotProps.item.img"
                  :alt="slotProps.item.alt"
                  class="contacts__gallery-img"
                />
              </template>
            </Galleria>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useValidation } from '@/composables/useValidation'
import { Form, Field } from 'vee-validate'
import Galleria from 'primevue/galleria'

const textarea = ref('')
const validationSchema = useValidation(['name', 'phone', 'email'])

const { sendToTelegram } = useSendToTelegram()

const sendForm = async (values: any, { resetForm }: any) => {
  try {
    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      comment: textarea.value,
    }
    await sendToTelegram(formData)
    console.log('Message sent successfully')
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    textarea.value = ''
    resetForm()
  }
}
</script>

<style scoped lang="scss">
.contacts {
  padding-bottom: 100px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
  &__title {
    margin-bottom: 10px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 49.2px; /* 123.482% */
    @media screen and (max-width: 1024px) {
      font-size: 28px;
    }
    @media screen and (max-width: 675px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  &__item-color {
    color: #000;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
  &__gallery {
    width: 100%;
    max-width: 700px;
    height: auto;
    @media screen and (max-width: 1024px) {
      max-width: 100%;
      min-height: 700px;
      display: flex;
      justify-content: center;
    }
    @media screen and (max-width: 675px) {
      min-height: 100%;
    }
  }
  &__description {
    margin-bottom: 30px;
    text-align: center;
    color: #000;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    @media screen and (max-width: 1024px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  &__maps {
    width: 100%;
    min-height: 350px;
    border-radius: 25px;
    border: 1px solid #8f8f8f;
    overflow: hidden;
    @media screen and (max-width: 463px) {
      min-height: 300px;
    }
  }

  &__input-field {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__wrapperGallery {
    display: grid;
    grid-template-columns: 1fr 1fr; // левая и правая половина
    gap: 20px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  &__wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__form-wrapper {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__wrap-cont {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  &__label {
    color: #000;
    font-family: 'Manrope';
    font-size: 18.906px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
  &__pic {
    width: 34px;
    height: 34px;
    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  }
  &__input {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    border: 1px solid #8f8f8f;
    background: #fff;
    padding: 0 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    outline: none;
    &::placeholder {
      color: #8f8f8f;
    }
    &--error {
      color: #ff3e29;
      border: 1px solid #ff3e29;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      height: 40px;
    }
  }
  &__address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  &__textarea {
    width: 100%;
    height: 100%;
    min-height: 100%;
    border-radius: 15px;
    border: 1px solid #8f8f8f;
    background: #fff;
    padding: 10px 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    resize: none;
    overflow: hidden;
    outline: none;
    &::placeholder {
      color: #8f8f8f;
      // font-size: 16px;
    }
  }
  &__text {
    margin-bottom: 10px;
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 675px) {
      line-height: normal;
    }
  }
  &__item {
    padding: 10px 10px 10px 20px;
    border: 2px solid #5cbcd2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__items {
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
  &__button {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    background: #5cbcd2;
    color: #fff;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px; /* 163.967% */
  }
  &__policy {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 163.967% */
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
  &__wrap-maps {
    max-height: 300px;
    width: 100%;
  }
  &__gallery-img {
    width: 100%;
    height: 528px; // можно настроить под макет
    border-radius: 15px;
    @media screen and (max-width: 1024px) {
      height: 100%;
      max-height: 600px;
    }
  }
}
.p-galleria {
  border-style: none;
}
</style>
