<script setup lang="ts">
import TictactoeGame from "./components/TictactoeGame.vue";
</script>

<template>
  <div>
    <TictactoeGame />
  </div>
</template>

<style scoped>
div {
  width: auto;
}

@media (width <= 740px) {
  div {
    max-width: 25rem;
    scale: 1;
  }
}
</style>
