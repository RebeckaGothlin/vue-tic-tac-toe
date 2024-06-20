<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  state: string;
}>();

const emit = defineEmits<{
  (e: "squareClicked"): void;
}>();

const playGame = () => {
  if (props.state === "") {
    emit("squareClicked");
  }
};
</script>

<template>
  <div class="gameSquare" @click="playGame">
    <p class="gameValue">{{ state }}</p>
  </div>
</template>

<style scoped>
.gameSquare {
  border: 2px rgb(114, 5, 27) solid;
  overflow: hidden;
  transition: 0.5s ease;
}

.gameSquare:hover {
  background-color: rgb(227, 176, 189);
}

.gameValue {
  font-size: 2rem;
}
</style>

export default {};
