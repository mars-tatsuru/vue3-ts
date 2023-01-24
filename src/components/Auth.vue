<script setup lang="ts">
import { ref, computed } from 'vue';


// const pointUp = ():void => {
//   localPoint.value++
// }

interface Emits {
  (event: "createnew"): void
  // (e: "update:visible", visible: boolean): void;
}

const emit = defineEmits<Emits>();

const clickNew = ():void => {
  emit("createnew")
}



</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ name }}</h1> -->
    <!-- <h1 class="green">{{ localPoint }}</h1>
    <button type="button" @click="pointUp">ポイント加算</button> -->
    <button type="button" @click="clickNew">親へ渡す</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
