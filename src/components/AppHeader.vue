<template>
  <header class="header1">
    <div class="container">
      <div class="logo">
        <a href="/"><img src="/src/assets/images/logo.png" alt="" /></a>
      </div>

      <nav class="nav">
        <a href="/contacts">КОНТАКТЫ</a>
        <a href="/calculator">КАЛЬКУЛЯТОР ЦЕН</a>
        <a href="/delivery">ДОСТАВКА</a>
      </nav>

      <div class="actions">
        <button class="send nav_application" type="button" @click="isOpen = true">
          ЗАКАЗАТЬ ЗВОНОК
        </button>
        <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
          <!-- Modal -->
          <div class="custom-modal">
            <div class="modal-header-custom">
              <h3 class="app_header">Заявка на обратный звонок</h3>

              <button class="close-btn" @click="closeModal">×</button>
            </div>

            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label class="form-label"> Имя </label>

                <input v-model="form.name" class="form-control" type="text" />
              </div>

              <div class="mb-3">
                <label class="form-label"> Номер телефона </label>

                <input v-model="form.phone" class="form-control" type="text" />
              </div>

              <div class="mb-3">
                <label class="form-label"> Сообщение </label>

                <textarea v-model="form.text" class="form-control"> </textarea>
              </div>

              <div class="d-flex justify-content-center">
                <button type="submit" class="submit-btn">Отправить</button>
              </div>
            </form>
          </div>
        </div>
        <a class="phone" href="tel:+79601721813"> +7(960)172-18-13 </a>
      </div>
    </div>
  </header>
  <header class="header2">
    <nav class="navbar fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img  style="width: 25vh" src="/src/assets/images/logo.png" alt=""
        /></a>
        <button
          style="border: #4563b0 1px solid; border-radius: 0"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span style="background-image: none; padding-top: 4px" class="navbar-toggler-icon"
            ><img src="/src/assets/images/burger.png" alt=""
          /></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          style="background: #fff"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Меню</h5>
            <button
              type="button"
              class="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item mb-2">
                <div class="nav_btn">
                  <a
                    class="a-burg"
                    href="/contacts"
                    >Контакты</a
                  >
                </div>
              </li>
              <li class="nav-item mb-2">
                <div class="nav_btn">
                  <a
                    class="a-burg"
                    href="/calculator"
                    >Калькулятор цен</a
                  >
                </div>
              </li>
              <li class="nav-item mb-2">
                <div class="nav_btn">
                  <a
                    class="a-burg"
                    href="/delivery"
                    >Доставка</a
                  >
                </div>
              </li>
            </ul>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item mb-2">
                <div class="actions d-flex">
                  <button class="send nav_application" type="button" @click="isOpen = true">
                    ЗАКАЗАТЬ ЗВОНОК
                  </button>
                  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
                    <!-- Modal -->
                    <div class="custom-modal">
                      <div class="modal-header-custom">
                        <h3 class="app_header">Заявка на обратный звонок</h3>

                        <button class="close-btn" @click="closeModal">×</button>
                      </div>

                      <form @submit.prevent="submitForm">
                        <div class="mb-3">
                          <label class="form-label"> Имя </label>

                          <input v-model="form.name" class="form-control" type="text" />
                        </div>

                        <div class="mb-3">
                          <label class="form-label"> Номер телефона </label>

                          <input v-model="form.phone" class="form-control" type="text" />
                        </div>

                        <div class="mb-3">
                          <label class="form-label"> Сообщение </label>

                          <textarea v-model="form.text" class="form-control"> </textarea>
                        </div>

                        <div class="d-flex justify-content-center">
                          <button type="submit" class="submit-btn">Отправить</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item mb-2">
                <a class="phone" href="tel:+79601721813"> +7(960)172-18-13 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const form = ref({
  name: '',
  phone: '',
  text: '',
})

const closeModal = () => {
  isOpen.value = false
}

const submitForm = async () => {
  console.log(form.value)

  alert('Заявка отправлена')

  form.value = {
    name: '',
    phone: '',
    text: '',
  }

  closeModal()
}
</script>

<style scoped>
.navbar{
  background-color: white;
}
.a-burg {
  font-weight: 400;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}
.form-control {
  border-radius: 0;
  border: 1px solid black;
  padding: 10px 15px;
}
.header1 {
  display: block;
  width: 100%;
}
.header2 {
  display: none;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 14px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 260px;
}
.logo img {
  height: 70px;
}

.shape {
  width: 20px;
  height: 24px;
  background: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%);
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  text-decoration: none;
  color: black;
  font-weight: 400;
}

.nav a:hover {
  border-bottom: #4563b0 1px solid;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.app_header {
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 22px;
}
.send {
  color: white;
  text-transform: uppercase;
  background: #4563b0;
  padding: 15px;
  border: none;
}

.call-btn:hover {
  background: #2f4fa3;
}

.phone {
  color: black;
  font-family: 'Unbounded';
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}
.nav_application {
  border: none;
  font-weight: 500;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  background: #4563b0;
  padding: 15px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
}

.custom-modal {
  background: white;
  width: 500px;
  padding: 30px;
  position: relative;
}

.modal-header-custom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.close-btn {
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
}

.submit-btn {
  color: white;
  text-transform: uppercase;
  background: #4563b0;
  padding: 15px;
  border: none;
}
@media (max-width: 380px) {
  .nav-link {
    font-size: 14px;
    padding: 0;
  }
  .header2 {
    background-color: white;
    display: block;
  }
  .header1 {
    display: none;
  }
  .nav_btn a {
    font-size: 14px;
  }
}
</style>
