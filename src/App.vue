<script setup>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');

* {
  font-family: 'Raleway', 'sans-serif';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  margin: 0;
}
</style>
