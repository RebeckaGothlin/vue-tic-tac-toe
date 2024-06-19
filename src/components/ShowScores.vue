<script setup lang="ts">
import { IGameState } from "../models/IGameState";
import { defineProps } from "vue";

const props = defineProps<{
  gameState: IGameState;
}>();
</script>

<template>
  <aside class="showScore">
    <h3>Resultat</h3>
    <p>
      {{ props.gameState.users.nameO }}:
      {{ props.gameState.scores.scoresO }} poäng.
    </p>
    <p>
      {{ props.gameState.users.nameX }}:
      {{ props.gameState.scores.scoresX }} poäng.
    </p>
  </aside>
</template>

<style scoped>
h3 {
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 2.7rem;
  text-decoration: underline 1.5px;
}

.showScore {
  margin-top: 20px;
  padding-bottom: 20px;
  border: 2px solid rgb(114, 5, 27);
  border-radius: 2.5%;
  background-color: rgb(255, 200, 213);
}
</style>
