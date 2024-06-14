<script setup lang="ts">
import { IGameState } from '../models/IGameState';
import { defineProps } from 'vue';

const props = defineProps<{
  gameState: IGameState;
}>();
</script>

<template>
    <aside class="scoreShow">
      <h3>Resultat</h3>
      <p>{{ props.gameState.users.nameO }}: {{ props.gameState.scores.scoresO }} poäng.</p>
      <p> {{ props.gameState.users.nameX }}: {{ props.gameState.scores.scoresX }} poäng.</p>
    </aside>
</template>

<style scoped>
h3 {
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 3rem;
}
</style>