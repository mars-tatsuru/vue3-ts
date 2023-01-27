<script setup lang="ts">
import { ref,reactive } from 'vue';

const memberSelect = ref(1)


</script>

<template>
  <select name="memberSelect" v-model="memberSelect">
    <option value="1">普通会員</option>
    <option value="2">特別会員</option>
    <option value="3">優良会員</option>
  </select>
  <p>選択されたセレクトボタン : {{ memberSelect }}</p>

</template>

<style scoped>
</style>
