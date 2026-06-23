<template>
  <div class="main">
    <div class="header">
      <div class="background_main">
        <img src="/src/assets/images/back_header.png" alt="" />
      </div>
      <div class="w-100 text-center header-block">
        <h1 class="header-main">
          ИЗГОТОВЛЕНИЕ СТЕКЛОПАКЕТОВ <br />
          ЛЮБОЙ СЛОЖНОСТИ
        </h1>
        <p class="header_delivery mt-3">
          Производство стеклопакетов с доставкой по Нижегородской области
        </p>
      </div>
    </div>
    <div class="container cont-main">
      <div>
        <div class="text-center d-flex flex-column align-items-center services-block">
          <h3 class="sub-header">Наши услуги</h3>
          <div class="line_serv"></div>
        </div>
        <div class="services">
          <div class="service-block">
            <div class="service-img"><img src="/src/assets/images/service1.png" alt="" /></div>
            <div class="mt-3 service-p">
              <p class="name_serv">Изготовление стеклопакетов</p>
              <p>от 2050 рублей</p>
            </div>
          </div>
          <div class="service-block">
            <div class="service-img"><img src="/src/assets/images/service2.png" alt="" /></div>
            <div class="mt-3 service-p">
              <p class="name_serv">Резка стекла</p>
              <p>от 850 рублей</p>
            </div>
          </div>
          <div class="service-block">
            <div class="service-img"><img src="/src/assets/images/service3.png" alt="" /></div>
            <div class="mt-3 service-p">
              <p class="name_serv">Нанесение пленки</p>
              <p>от 850 рублей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery">
      <div class="delivery-block container pt-5 pb-5">
        <div class="delivery-block-p">
          <p class="delivery-h">Доставка по Нижегородской области</p>
          <p class="delivery-p">При заказе от 10 стеклопакетов доставка бесплатная</p>
        </div>
        <div>
          <a href="/delivery" class="more_delivery">Подробнее</a>
        </div>
      </div>
    </div>
    <div class="container" id="ApplicationWelcome">
      <div class="glasses-block">
        <div class="header-glass">
          <div class="glass-h">
            <div class="line-bl1"></div>
            <h3 class="ms-3 glass-h3">
              Cтеклопакеты
            </h3>
            <div class="line-bl2"></div>
          </div>
        </div>
        <div class="glasses mt-5">
          <div class="glass-item">
            <img src="/src/assets/images/glass1.png" alt="" />
            <a class="mt-3">Стеклопакеты однокамерные</a>
          </div>
          <div class="glass-item">
            <img src="/src/assets/images/glass2.png" alt="" />
            <a class="mt-3">Стеклопакеты двухкамерные</a>
          </div>
          <div class="glass-item">
            <img src="/src/assets/images/glass3.png" alt="" />
            <a class="mt-3">Стеклопакеты с пленкой</a>
          </div>
          <div class="glass-item">
            <img src="/src/assets/images/glass4.png" alt="" />
            <a class="mt-3">Стеклопакеты с энергосберегающим нанесением</a>
          </div>
        </div>
      </div>
      <div class="application">
        <div class="d-flex flex-column justify-content-between">
          <div class="application-head">
            <h3>Остались вопросы? Заполните форму</h3>
            <p>Получите бесплатную консультацию</p>
          </div>
          <div class="call-block">
            <p class="me-3 call-p">Или позвоните по номеру</p>
            <p class="call-num">+7 (960) 172-18-13</p>
          </div>
        </div>
        <div class="form-application">
          <form id="formAdd" @submit.prevent="submitForm">
            <div class="mb-3">
              <input
                v-model="form.name"
                type="text"
                placeholder="Имя"
                class="input-application"
              />
              <div v-if="errors.name" class="text-danger">
                {{ errors.name[0] }}
              </div>
            </div>
            <div class="mb-3">
              <input
                v-model="form.phone"
                type="text"
                placeholder="Номер телефона"
                class="input-application"
              />
              <div v-if="errors.phone" class="text-danger">
                {{ errors.phone[0] }}
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button class="send" type="submit" :disabled="loading">
                {{ loading ? 'Отправка...' : 'ОТПРАВИТЬ' }}
              </button>
            </div>
            <div v-if="successMessage" class="text-success mt-3">
              {{ successMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
})

const errors = ref({})
const successMessage = ref('')
const loading = ref(false)

const submitForm = () => {
  errors.value = {}
  successMessage.value = ''

  const newErrors = {}

  if (!form.value.name) {
    newErrors.name = ['Введите имя']
  }

  if (!form.value.phone) {
    newErrors.phone = ['Введите номер телефона']
  }

  // если есть ошибки — показываем и выходим
  if (Object.keys(newErrors).length > 0) {
    errors.value = newErrors
    return
  }

  console.log(form.value)

  successMessage.value = 'Заявка успешно отправлена'

  form.value = {
    name: '',
    phone: '',
  }
}
</script>

<style scoped>
.glass-h3 {
  font-family: 'Unbounded';
  font-weight: 400;
}
.main {
  margin: 0 auto;
  box-sizing: border-box;
}
.header {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.header-block {
  text-align: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 260px;
}
.background_main {
  position: absolute;
  z-index: 0;
}
.background_main img {
  width: 100%;
}
.header_delivery {
  color: white;
  font-weight: 400;
  font-size: 24px;
  display: block;
}
.header-main {
  font-family: 'Unbounded';
  color: white;
  font-weight: 400;
  font-size: 54px;
}
.cont-main {
  color: black;
  margin-top: 800px;
}
.services-block {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line_serv {
  background: #4563b0;
  height: 3px;
  width: 80px;
}
.sub-header {
  font-family: 'Unbounded';
  font-weight: 400;
}
.services {
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.service-p {
  margin-left: 10px;
}
.name_serv {
  font-weight: 600;
}
.more {
  border: #4563b0 1px solid;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.more:hover {
  background: #4563b0;
  color: #fff;
}
.more_delivery {
  font-weight: 500;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  background: #fff;
  padding: 15px;
}
.more_delivery:hover {
  background: #1f1f1f;
  color: #fff;
}
.delivery {
  margin-top: 100px;
  background: #4563b0;
  color: white;
}
.delivery-p {
  font-size: 18px;
}
.delivery-h {
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 600;
}
.delivery-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.glasses-block {
  margin-top: 90px;
}
.header-glass {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.glass-h {
  color: black;
  display: flex;
  align-items: center;
}
.line-bl1 {
  background: #4563b0;
  height: 70px;
  width: 3px;
  display: block;
}
.line-bl2 {
  background: #4563b0;
  height: 3px;
  width: 80px;
  display: none;
}
.glasses {
  display: flex;
  justify-content: space-between;
}
.glass-item {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.glass-item a {
  font-weight: 600;
  width: 80%;
  color: black;
  text-decoration: none;
}
.application {
  margin-top: 100px;
  margin-bottom: 100px;
  border-top: #20252c 1px solid;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
}
.input-application {
  box-sizing: content-box;
  width: 350px;
  border: 1px solid black;
  padding: 10px 15px;
}
.application-head {
  padding-bottom: 40px;
}
.application-head h3 {
  font-weight: 600;
  font-size: 28px;
}
.application-head p {
  font-size: 18px;
  font-weight: 500;
}
.send {
  color: white;
  text-transform: uppercase;
  background: #4563b0;
  padding: 15px;
  border: none;
}
.call-num {
  font-weight: 600;
  font-size: 28px;
  font-family: 'Unbounded';
  color: #4563b0;
}
.call-p {
  font-size: 18px;
  font-weight: 500;
}
.call-block {
  display: flex;
  align-items: center;
}
@media (max-width: 380px) {
  .application {
    margin-top: 30px;
    border-top: #20252c 1px solid;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .send {
    padding: 12px;
  }
  #formAdd {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .call-num {
    font-size: 14px;
  }
  .call-p {
    font-size: 16px;
  }
  .call-block {
    flex-direction: column;
  }
  .application-head {
    padding-bottom: 10px;
    text-align: center;
  }
  .application-head h3 {
    font-size: 16px;
  }
  .application-head p {
    font-size: 14px;
  }
  .glass-item {
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .glass-item img {
    width: 70%;
  }
  .header-glass {
    display: flex;
    justify-content: center;
  }
  .line-bl1 {
    display: none;
  }
  .line-bl2 {
    display: block;
  }
  .glass-h {
    flex-direction: column;
    justify-content: center;
  }
  .more-delivery-block1 {
    display: block;
  }
  .more-delivery-block {
    display: none;
  }
  .glasses-block {
    margin-top: 30px;
  }
  .delivery {
    margin-top: 30px;
  }
  .more_delivery {
    padding: 10px;
  }
  .delivery-block-p {
    text-align: center;
    margin-bottom: 12px;
  }
  .delivery-p {
    font-size: 14px;
  }
  .delivery-h {
    font-size: 18px;
  }
  .delivery-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .more {
    padding: 10px;
    background: #4563b0;
    color: white;
  }
  .btn-service {
    margin-top: 10px;
  }
  .service-img {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .service-block img {
    width: 80%;
  }
  .service-block {
    margin-bottom: 20px;
  }
  .service-p {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .service-p p {
    font-size: 14px;
  }
  h3 {
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .services-block {
    padding-top: 100px;
  }
  .header_delivery {
    display: none;
  }
  .header {
    margin-top: 65px;
  }
  .header-block {
    margin-top: 40px;
  }
  .cont-main {
    margin-top: 55px;
  }
  .input-application {
    width: 85%;
  }
  .application {
    flex-direction: column;
  }
  .header-main {
    font-size: 16px;
  }
  .services {
    margin-top: 25px;
    flex-direction: column;
  }
  .service-block img {
    width: 80%;
  }
  .service-block {
    margin-bottom: 20px;
  }
  .glasses {
    flex-direction: column;
  }
  .more:hover {
    background: none;
    color: #fff;
  }
}
</style>
