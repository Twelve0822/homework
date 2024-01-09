<script setup>
import { useImglinkStore } from '../stores/imglink'

const store = useImglinkStore()
</script>

<template>
  <img alt="logo" class="logo" :src="store.imglink" height="250" />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
