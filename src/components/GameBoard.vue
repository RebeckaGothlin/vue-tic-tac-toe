<script setup lang="ts">
import { defineProps, defineEmits, watch } from "vue";
import SingleSquare from "./SingleSquare.vue";
import { IGameState } from "../models/IGameState";

const props = defineProps<{
  gameState: IGameState;
}>();

const emit = defineEmits(["play"]);

let currentUser = props.gameState.isXturn
  ? props.gameState.users.nameX
  : props.gameState.users.nameO;

watch(
  () => props.gameState.isXturn,
  (isXturn) => {
    currentUser = isXturn
      ? props.gameState.users.nameX
      : props.gameState.users.nameO;
  }
);

const play = (index: number) => {
  if (props.gameState.gameOver) {
    return;
  }

  const { gameboard } = props.gameState;
  if (gameboard[index].length === 0) {
    if (props.gameState.isXturn) {
      gameboard[index] = "X";
      currentUser = props.gameState.users.nameO;
    } else {
      gameboard[index] = "O";
      currentUser = props.gameState.users.nameX;
    }
    props.gameState.isXturn = !props.gameState.isXturn;

    checkIfGameOver(index);
    emit("play", { index, player: gameboard[index] });
  }
};

function checkIfGameOver(index: number) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const currentPlayer = props.gameState.gameboard[index];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      props.gameState.gameboard[a] === currentPlayer &&
      props.gameState.gameboard[b] === currentPlayer &&
      props.gameState.gameboard[c] === currentPlayer
    ) {
      if (currentPlayer == "O") {
        props.gameState.scores.scoresO++;
      } else {
        props.gameState.scores.scoresX++;
      }
      props.gameState.gameOver = true;
      break;
    }
  }

  const isTie = props.gameState.gameboard.every((square) => square !== "");
  if (isTie) {
    props.gameState.gameOver = true;
  }
}
</script>

<template>
  <h2 v-if="!gameState.gameOver">Det är {{ currentUser }}s tur</h2>
  <h2 v-else>GAME OVER!</h2>
  <div class="gameBoard">
    <SingleSquare
      v-for="(square, index) in gameState.gameboard"
      :key="index"
      :state="square"
      :clickable="!gameState.gameOver && square === ''"
      @click="play(index)"
    />
  </div>
</template>

<style scoped>
h2 {
  font-family: "Times New Roman", Times, serif;
  color: rgb(114, 5, 27);
  font-size: 2.6rem;
}

.gameBoard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  width: 23rem;
  height: 23rem;
  background-color: rgb(255, 200, 213);
  color: rgb(114, 5, 27);
}

@media (width <= 740px) {
  .gameBoard {
    width: 20rem;
    height: 20rem;
  }

  h2 {
    font-size: 2.3rem;
  }
}
</style>
