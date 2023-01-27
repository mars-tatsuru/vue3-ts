<script setup lang="ts">
import { reactive } from 'vue';

interface props {
  // number: number,
  user: string,
  // msg: string,
}
defineProps<props>();


const memberInfo = reactive({
  name: "koike",
  state: "問題ありません"
})

</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3> -->
    <slot :memberInfo="memberInfo">
      <!-- <p>問題ありません。</p> -->
      <h1>{{ memberInfo.name }}</h1>
      <p>{{ memberInfo.state }}</p>
    </slot>
    <!-- <h2>詳細内容</h2> -->
    <!-- <slot name="detail">
      <p>特に問題ありません。</p>
    </slot> -->
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
