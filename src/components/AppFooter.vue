<template>
  <footer>
    <div class="foot">
      <div class="container-sm pt-5 pb-5 block-footer">
        <div class="d-flex flex-column one-block">
          <div class="logo-footer">
            <img class="mb-3" src="/src/assets/images/logoblack.png" alt="" />
          </div>
          <p class="mb-3">г. Нижний Новгород ул. Кондукторская 3Б</p>
          <p class="mb-3">mir-stekla@bk.ru</p>
          <p>+7(960)172-18-13 (Андрей), +7(903)848-78-36 (Сергей)</p>
        </div>
        <div class="d-flex flex-column one-block">
          <p class="about-comp">УСЛУГИ</p>
          <a class="a-calc" href="/calculator">Калькулятор цен</a>
        </div>
        <div class="d-flex flex-column">
          <p class="about-comp">
            О КОМПАНИИ
          </p>
          <a class="mb-3 a-comp" href="/delivery">Доставка</a>
          <a class="a-comp" href="/contacts">Контакты</a>
        </div>
      </div>
      <div class="pb-3 text-center maker-site">
        <p>Сайт разработал студент группы ПРИ24-сз Костриков Дмитрий</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.about-comp {
  text-decoration: underline 2px #4563b0;
  text-underline-offset: 7px;
}
.a-comp {
  color: white;
  text-decoration: none;
}
.a-calc {
  color: white;
  text-decoration: none;
}
.foot {
  background: #20252c;
  color: white;
}
.block-footer {
  display: flex;
  justify-content: space-between;
}
.logo-footer img {
  width: 350px;
}
.maker-site p {
  margin-bottom: 0;
}
@media (max-width: 380px) {
  .one-block {
    margin-bottom: 2rem;
  }
  .block-footer {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p,
  a {
    font-size: 14px;
  }
  .logo-footer img {
    width: 200px;
  }
}
</style>
