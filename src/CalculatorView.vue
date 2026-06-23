<template>
  <div class="container" id="Calculator">
    <div class="text-center d-flex flex-column align-items-center mb-5">
      <h3 class="mb-2" style="font-family: 'Unbounded'; font-weight: 400">Калькулятор цен</h3>
      <div style="background: #4563b0; height: 3px; width: 80px"></div>
    </div>
    <div class="col-5 d-flex justify-content-center" style="margin: 0 auto">
      <form id="form" @submit.prevent="calculate">
        <div class="mb-3">
          <label for="category" class="form-label">Категория стеклопакета</label>
          <select
            class="form-select inp-calc"
            name="category"
            id="category"
            v-model="choise_category"
          >
            <option value="1.00">Однокамерный</option>
            <option value="1.35">Двухкамерный</option>
            <option value="1.65">Трехкамерный</option>
            <!-- <option v-for="c in categories" :value="c.id">@{{ c.title }}</option> -->
          </select>
          <div>
            <button class="btn btn-primary col-12" hidden @click="filter">Применить</button>
          </div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Наименование стекла</label>
          <select class="form-select inp-calc" name="price" id="price" v-model="glassPrice">
            <option value="0" selected></option>
            <option value="1.00">Обычное</option>
            <option value="1.40">Энергосберегающее</option>
            <option value="1.70">Мультфункциональное</option>
            <!-- <option v-for="p in data" :value="p.price">@{{ p.title }}(@{{ p.formula }})</option> -->
          </select>
        </div>
        <div class="mb-3">
          <label for="width" class="form-label">Ширина стеклопакета (мм)</label>
          <input class="form-control inp-calc" type="text" id="width" v-model="width" />
        </div>
        <div class="mb-3">
          <label for="height" class="form-label">Высота стеклопакета (мм)</label>
          <input class="form-control inp-calc" type="text" id="height" v-model="height" />
        </div>
        <div class="d-flex justify-content-center mb-3">
          <button class="btn-auth">Рассчитать</button>
        </div>
        <div style="height: 50px">
          <p style="font-size: 20px; font-weight: 500; text-align: center">
            Итого: {{ total }} рублей
          </p>
        </div>
      </form>
    </div>
    <div>
      <p>
        *Цена указана в среднем значении, для уточнения итоговой стоимости оформите заявку на
        обратный звонок или позвоните по номеру, указанному в шапке профиля
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const choise_category = ref(1.0)
const glassPrice = ref(0)
const width = ref('')
const height = ref('')
const total = ref(0)

const calculate = () => {
  const w = Number(width.value)
  const h = Number(height.value)

  if (!w || !h || !glassPrice.value) {
    total.value = 0
    return
  }

  const square = (w * h) / 1000000

  const basePrice = 3500

  let result = square * basePrice * Number(glassPrice.value) * Number(choise_category.value)

  if (result < 2050 && result !== 0) {
    result = 2050
  }

  total.value = result.toFixed(2)
}
</script>

<style scoped>
.container {
  flex: 1 1 auto;
  margin-top: 3rem;
  margin-bottom: 100px;
}
.btn-auth {
  font-weight: 500;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  background: #4563b0;
  padding: 10px 15px;
  border: none;
}
.inp-calc {
  border: 1px solid black;
  border-radius: 0;
  width: 400px;
}
@media (max-width: 380px) {
  .container {
    margin-top: 6rem;
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    text-decoration: none;
  }
  .col-5 {
    width: 90%;
  }
  .btn-auth {
    padding: 10px;
  }
  .inp-calc {
    width: 100%;
  }
}
</style>
