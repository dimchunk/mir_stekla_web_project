<template>
  <div class="main">
    <div class="container">
      <div class="text-center d-flex flex-column align-items-center">
        <h3 class="mb-2 title" style="font-family: 'Unbounded'; font-weight: 400">Контакты</h3>
        <div class="line"></div>
      </div>

      <div class="inf-contact">
        <div class="inf card-hover">
          <p style="color: #4563b0; font-weight: 500; text-transform: uppercase">
            Общая контактная информация
          </p>

          <p>+7(960)172-18-13 (Андрей), +7(903)848-78-36(Сергей)</p>
          <p>mir-stekla@bk.ru</p>
          <p>Кондукторская улица, 3Б, Нижний Новгород, 603033</p>

          <button class="copy-btn" @click="copyEmail">
            {{ copied ? 'Email скопирован ✓' : 'Скопировать email' }}
          </button>
        </div>

        <div class="inf-2 card-hover">
          <p style="color: #4563b0; font-weight: 500; text-transform: uppercase">
            Данные об организации
          </p>

          <p>ООО "Мир Стекла-НН"</p>
          <p>
            Юридический адрес 603137, Нижегородская обл., город Нижний Новгород, ул. Маршала Жукова,
            дом 25, кв. 137
          </p>
          <p>ИНН/КПП 5261117690/526101001</p>
          <p>ОГРН 1185275036583</p>
          <p>Корр. счет 30101810145250000411</p>
          <p>БИК 044525411</p>
        </div>
      </div>
    </div>

    <div class="cart">
      <div style="position: relative; overflow: hidden">
        <a
          href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >
          Нижний Новгород
        </a>

        <a
          href="https://yandex.ru/maps/47/nizhny-novgorod/?ll=43.840114%2C56.275654&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=43.840114%2C56.275710&whatshere%5Bzoom%5D=19.23&z=19.23"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >
          Яндекс Карты
        </a>

        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=43.840114%2C56.275654&mode=whatshere&whatshere%5Bpoint%5D=43.840114%2C56.275710&whatshere%5Bzoom%5D=19.23&z=19.23"
          width="100%"
          height="450"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(false)

const copyEmail = async () => {
  await navigator.clipboard.writeText('mir-stekla@bk.ru')

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.cart {
  width: 100%;
  bottom: 0;
  margin-top: 100px;
}

.inf-2 {
  width: 35%;
}

.inf-contact {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.main {
  flex: 1 1 auto;
}

.container {
  margin-top: 3rem;
}

.line {
  background: #4563b0;
  height: 3px;
  width: 80px;
  transition: 0.3s;
}

.title:hover + .line {
  width: 120px;
}

/* Небольшая анимация карточек */
.card-hover {
  transition: 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
}

/* Кнопка */
.copy-btn {
  margin-top: 15px;
  background: #4563b0;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 0px;
  cursor: pointer;
  transition: 0.3s;
}

.copy-btn:hover {
  background: #2f4d96;
}

@media (max-width: 380px) {
  .inf {
    width: 90%;
  }

  .inf-2 {
    margin-top: 10px;
    width: 90%;
  }

  .container {
    margin-top: 6rem;
  }

  .cart {
    margin-top: 10px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    text-decoration: none;
  }

  .inf-contact {
    align-items: center;
    flex-direction: column;
  }
}
</style>
