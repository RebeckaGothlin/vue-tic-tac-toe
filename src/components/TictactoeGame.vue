<script setup lang="ts">
import { watch, reactive, defineEmits } from "vue";
import GameBoard from "./GameBoard.vue";
import CommandButtons from "./CommandButtons.vue";
import AskUsername from "./AskUsername.vue";
import { IGameState } from "../models/IGameState";
import ShowScores from "./ShowScores.vue";

const gameState = reactive<IGameState>({
  gameboard: ["", "", "", "", "", "", "", "", ""],
  showScores: false,
  users: {
    nameX: "",
    nameO: "",
  },
  scores: {
    scoresX: 0,
    scoresO: 0,
  },
  isXturn: true,
  gameOver: false,
});

const gameStateFromLocalStorage = localStorage.getItem("gameState");
if (gameStateFromLocalStorage) {
  Object.assign(gameState, JSON.parse(gameStateFromLocalStorage));
}

watch(gameState, (newGameState) => {
  localStorage.setItem("gameState", JSON.stringify(newGameState));
});

const emit = defineEmits<{
  (e: "play", index: number): void;
}>();

const playGame = (index: number) => {
  emit("play", index);
};
</script>

<template>
  <div class="ticTacToeGame">
    <div
      class="gameBoardShow"
      v-if="
        gameState.users.nameX.length > 0 && gameState.users.nameO.length > 0
      "
    >
      <GameBoard :gameState="gameState" @play="playGame" />
    </div>
    <div
      class="aside"
      v-if="
        gameState.users.nameX.length > 0 && gameState.users.nameO.length > 0
      "
    >
      <ShowScores :gameState="gameState" />
    </div>
    <div>
      <CommandButtons :gameState="gameState" />
    </div>
    <div v-if="gameState.users.nameX.length === 0">
      <AskUsername :xoro="'X'" :gameState="gameState" />
    </div>
    <div v-else-if="gameState.users.nameO.length === 0">
      <AskUsername :xoro="'O'" :gameState="gameState" />
    </div>
  </div>
</template>

<style scoped>
.ticTacToeGame {
  background-color: rgb(238, 159, 177);
  border: 5px solid rgb(114, 5, 27);
  padding: 2rem;
  border-radius: 10px;
  height: fit-content;
}

.gameBoardShow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.aside {
  position: relative;
  display: contents;
  border: 5px solid rgb(114, 5, 27);
  background-color: rgb(238, 159, 177);
  color: rgb(114, 5, 27);
  right: 0;
  top: 0;
  border-radius: 10px;
  margin-right: 2rem;
  margin-top: 2rem;
  padding: 2rem;
}
</style>
