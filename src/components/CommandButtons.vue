<script setup lang="ts">
import { IGameState } from '../models/IGameState';
import { defineEmits, defineProps } from 'vue';

const props = defineProps<{
  gameState: IGameState;
}>();

const emit = defineEmits<{
  (e: 'gameRestarted'): void;
  (e: 'newGameStarted'): void;
}>();

const restartGame = () => {
  props.gameState.gameboard = ["","","","","","","","","",];
  props.gameState.gameOver = false;
  emit('gameRestarted');
};

const newGame = () => {
  props.gameState.gameboard = ["","","","","","","","","",];
  props.gameState.gameOver = false;
  props.gameState.users.nameX = "";
  props.gameState.users.nameO = "";
  props.gameState.scores.scoresX= 0;
  props.gameState.scores.scoresO= 0;
  localStorage.removeItem('gameState');
  emit('newGameStarted');
};
</script>

<template>
    <div class="commandButtons">
      <div class="restartGame" v-if="gameState.gameOver">
        <button @click="restartGame">Spela igen</button>
        <button @click="newGame">Spela med nya spelare</button>
      </div>
    </div>
</template>

<style scoped>
.commandButtons {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.restartGame {
    margin: 1rem;
    position: absolute;
    margin-top: 3rem;
}

button {
    margin: 1rem;
    background-color:rgb(114, 5, 27);
    color: rgb(255, 200, 213);
}
</style>