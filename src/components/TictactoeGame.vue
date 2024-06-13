<script setup lang="ts">
import { reactive, ref } from 'vue';
import { IGameState } from '../models/IGameState';

const gameState = ref<IGameState>({
    gameboard: ["", "", "", "", "", "", "", "", ""],
    showScores: false,
    users: {
        nameO: "",
        nameX: "",
    },
    isXturn: true,
    gameOver: false,
    scores: {
        scoresO: 0,
        scoresX: 0
    }
});
</script>

<template>

</template>

<style scoped>

</style>