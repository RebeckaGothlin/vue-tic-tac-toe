<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { IGameState } from "../models/IGameState";

let name = ref("");

const props = defineProps<{
  xoro: string;
  gameState: IGameState;
}>();

const emit = defineEmits<{
  (e: "usernameSubmitted", payload: { xoro: string; name: string }): void;
}>();

const submitUserName = () => {
  if (props.xoro === "X") {
    props.gameState.users.nameX = name.value;
  } else {
    props.gameState.users.nameO = name.value;
  }
  emit("usernameSubmitted", { xoro: props.xoro, name: name.value });
};
</script>

<template>
  <div class="firstPage">
    <h1>Tre i rad</h1>
    <p class="instruction">Få tre av dina symboler (X eller O) i rad horisontellt, vertikalt eller diagonalt. Den första spelaren som lyckas med detta vinner. Om alla rutor fylls utan att någon får tre i rad slutar spelet oavgjort.</p>
    <p>Fyll i namnen på spelare X och O för att börja spelet.</p>
    <label>Namn på spelare {{ xoro }}</label>
    <input v-model="name" class="askPlayer"/>
    <button class="usernameBtn" @click="submitUserName">Nästa</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 4rem;
  margin-top: 5px;
  font-family: 'Times New Roman', Times, serif;
}

.usernameBtn {
  border-radius: 16px;
  padding: 10px;
  background-color: rgb(114, 5, 27);
  color: rgb(255, 200, 213);
  margin: 10px;
  text-transform: uppercase;
  transition: 0.3s ease;
}

.usernameBtn:hover {
  background-color: rgb(70, 2, 16);
  border: 1px solid rgb(255, 200, 213);
}

input {
  border-radius: 8px;
  padding: 10px;
  font-size: 1rem;
  color: rgb(114, 5, 27);
  font-weight: bolder;
  background-color: rgb(255, 200, 213);
  transition: 0.3s ease
}

input:hover {
  background-color: rgb(227, 176, 189);
}

label {
  font-size: 1.2rem;
  margin: 16px;
}

.instruction {
  margin: 0 auto;
  font-weight: 700;
  margin-bottom: 50px;
  max-width: 400px;
  text-align: center;
  font-size: 1.2rem;
}

p {
  line-break: auto;
}

.firstPage {
  color: rgb(114, 5, 27);
}

@media (width <= 740px) {
  .firstPage{
      max-width: 480px;
  }

  h1 {
    font-size: 3.5rem;
  }

  .instruction {
    font-size: 1rem;
  }
}
</style>