<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProfileImg from './components/ProfileImg.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Snow Man・スノーマン</h1>
      <ProfileImg />
      <nav>
        <RouterLink to="/">説明</RouterLink>
        <RouterLink to="/member">メンバー</RouterLink>
        <RouterLink to="/work">作品</RouterLink>
        <a href="https://example.com">出演</a>
        <a href="https://example.com">関連内容</a>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    <p>©Copyright 2024 by gz. All rights reversed.</p>
  </footer>
</template>

<style scoped>
.wrapper {
  text-align: center;

  h1 {
    color: #198bce;
    padding-bottom: 30px;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer {
  position: fixed;
  left: 0;
  bottom: 2px;
  width: 100%;
  text-align: center;
}
</style>
