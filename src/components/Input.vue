<script setup lang="ts">
import { ref,reactive } from 'vue';

const inputNameModel = ref('tatatsuru')


</script>

<template>

  <input type="text" v-model="inputNameModel">
  <p>{{inputNameModel}}</p>

</template>

<style scoped>
</style>
