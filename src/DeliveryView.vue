<template>
  <div class="main">
    <div class="container">
      <div class="text-center d-flex flex-column align-items-center">
        <h3 class="mb-2 title">Доставка</h3>

        <div class="line"></div>
      </div>
    </div>

    <div class="text-center mt-5 roller">
      <div class="roller-track">
        <p>Доставка от 10 стеклопакетов бесплатная (по городу)</p>
        <p>Доставка от 10 стеклопакетов бесплатная (по городу)</p>
        <p>Доставка от 10 стеклопакетов бесплатная (по городу)</p>
        <p>Доставка от 10 стеклопакетов бесплатная (по городу)</p>
      </div>
    </div>

    <div class="container mt-5">
      <p class="p-delivery">Доставка осуществляется по Нижегородской области</p>

      <ul>
        <li>Верхняя часть города 1700р</li>
        <li>Нижняя часть города 1500р</li>
        <li>По области цена договорная</li>
      </ul>

      <button class="price-btn" @click="showInfo = !showInfo">
        {{ showInfo ? 'Скрыть информацию' : 'Узнать подробнее' }}
      </button>

      <transition name="fade">
        <div v-if="showInfo" class="info-box">
          <p>Доставка осуществляется в удобное для вас время по предварительной договоренности.</p>
        </div>
      </transition>

      <p class="p-self">Возможен самовывоз по адресу г. Нижний Новгород, ул. Кондукторская 3Б</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showInfo = ref(false)
</script>

<style scoped>
.p-delivery {
  font-weight: 500;
}
.p-self {
  font-weight: 500;
  margin-top: 20px;
}
.roller {
  width: 100%;
  overflow: hidden;
  background: #4563b0;
  padding: 20px 0;
  margin-top: 80px;
}

.roller-track {
  display: flex;
  width: max-content;
  animation: scroll 12s linear infinite;
}

.roller-track p {
  color: white;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  margin-right: 80px;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
.act {
  font-size: 20px;
  background: #4563b0;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 80px;
  padding: 20px 0;
  width: 100%;
  position: relative;
}

.line {
  background: #4563b0;
  height: 3px;
  width: 80px;
  transition: 0.3s;
}
.title {
  font-family: 'Unbounded';
  font-weight: 400;
}
.title:hover + .line {
  width: 120px;
}

.price-btn {
  margin-top: 20px;
  background: #4563b0;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 0px;
  cursor: pointer;
  transition: 0.3s;
}

.price-btn:hover {
  background: #304b8d;
}

.info-box {
  margin-top: 15px;
  padding: 15px;
  border-left: 4px solid #4563b0;
  background: #f5f7ff;
  border-radius: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

li::marker {
  color: #4563b0;
}

.main {
  flex: 1 1 auto;
  margin-top: 3rem;
  margin-bottom: 100px;
}

@media (max-width: 380px) {
  .act {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 50px;
    padding: 5px 0;
  }

  .main {
    margin-top: 6rem;
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    text-decoration: none;
  }
}
</style>
