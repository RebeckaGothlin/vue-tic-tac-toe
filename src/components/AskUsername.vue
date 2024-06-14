<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { IGameState } from '../models/IGameState';

const emit = defineEmits(['usernameSubmitted']);
const props = defineProps<{
  xoro: string;
  gameState: IGameState;
}>();

let name = ref("");

const submitUserName = () => {
  if (props.xoro === 'X') {
    props.gameState.users.nameX = name.value;
  } else {
    props.gameState.users.nameO = name.value;
  }
  emit('usernameSubmitted', { xoro: props.xoro, name });
};
</script>

<template>
  <div class="welcome">
    <h1>Tic Tac Toe</h1>
    <p>Fyll i namnen på spelare X och O för att börja spelet.</p>
    <label>Namn på spelare {{ xoro }}</label>
    <input v-model="name" class="askPlayer"/>
    <button class="usernameBtn" @click="submitUserName">Nästa</button>
  </div>
</template>

<style scoped>
.usernameBtn {
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgb(114, 5, 27);
    color: rgb(255, 200, 213);
    margin: 1rem;
}

input {
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: black;
    font-weight: bolder;
    background-color: rgb(255, 200, 213);
}

label {
    font-size: 1.5rem;
    margin: 1rem;
}

p {
    line-break: auto;
}

.welcome {
    color: rgb(114, 5, 27);
}

@media (width <= 740px) {
    .welcome {
        max-width: 30rem;
    }

    h1 {
        font-size: 3rem;
        font-family: 'Times New Roman', Times, serif;
    }
}
</style>