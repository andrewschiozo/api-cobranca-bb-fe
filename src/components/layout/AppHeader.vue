<template>
  <header>
    <img src="@/assets/logo.svg" alt="Logo Banco do Brasil" />
    <h3>Banco do Brasil</h3>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;

  & img {
    width: 1.75rem;
  }

  & h3 {
    margin: 0;
  }
}
</style>
