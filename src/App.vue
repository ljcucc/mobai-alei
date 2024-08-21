<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Header> </Header>
  <Nav></Nav>
  <article>
    <RouterView />
  </article>
  <Footer></Footer>
</template>

<style scoped></style>
