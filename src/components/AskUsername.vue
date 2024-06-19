<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { IGameState } from '../models/IGameState';

let name = ref("");

const props = defineProps<{
  xoro: string;
  gameState: IGameState;
}>();

const emit = defineEmits<{
  (e: 'usernameSubmitted', payload: { xoro: string; name: string }): void;
}>();

const submitUserName = () => {
  if (props.xoro === 'X') {
    props.gameState.users.nameX = name.value;
  } else {
    props.gameState.users.nameO = name.value;
  }
  emit('usernameSubmitted', { xoro: props.xoro, name: name.value });
};
</script>

<template>
  <div class="welcome">
    <h1>Tic Tac Toe</h1>
    <p class="instruction">Få tre av dina symboler (X eller O) i rad horisontellt, vertikalt eller diagonalt. Den första spelaren som lyckas med detta vinner. Om alla rutor fylls utan att någon får tre i rad slutar spelet oavgjort.</p>
    <p>Fyll i namnen på spelare X och O för att börja spelet.</p>
    <label>Namn på spelare {{ xoro }}</label>
    <input v-model="name" class="askPlayer"/>
    <button class="usernameBtn" @click="submitUserName">Nästa</button>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 10px;
}

.usernameBtn {
  border-radius: 16px;
  padding: 12px;
  background-color: rgb(114, 5, 27);
  color: rgb(255, 200, 213);
  margin: 10px;
}

input {
  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  color: black;
  font-weight: bolder;
  background-color: rgb(255, 200, 213);
}

label {
  font-size: 1.5rem;
  margin: 16px;
}

.instruction {
  font-weight: 500;
  margin-bottom: 50px;
}

p {
  line-break: auto;
}

.welcome {
  color: rgb(114, 5, 27);
}

@media (width <= 740px) {
  .welcome {
      max-width: 480px;
  }

  h1 {
    font-size: 48px;
    font-family: 'Times New Roman', Times, serif;
  }
}
</style>