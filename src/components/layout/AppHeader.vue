<template>
  <header class="app-header">
    <img src="@/assets/logo.svg" alt="Logo Banco do Brasil" />
    <h1>Banco do Brasil</h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--dark-blue) 0, var(--primary-blue) 100%);
  height: 60px;
  padding: 5px 20px;
}

.app-header img {
  width: 3rem;
}

.app-header h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #e2dede;
}
</style>
