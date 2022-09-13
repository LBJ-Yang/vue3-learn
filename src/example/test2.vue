<template>
  <div>the list is below</div>
  <ul>
    <item v-for="(ele, ind) in listData" :key="ele" :val="ele" />
  </ul>
  <button @click="resort">打乱顺序</button>
</template>

<script setup>
import { ref } from "vue";
import Item from "./item.vue";

const listData = ref(["A", "B", "C", "D", "E", "F", "G", "H"]);
const resort = () => {
  listData.value = ["A", "C", "D", "J", "F", "E", "G", "H"];
};
</script>
<style lang="scss" scoped></style>
