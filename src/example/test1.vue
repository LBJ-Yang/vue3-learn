<template>
  <div>this is static text</div>
  <div>the name is {{ name }}</div>
  <button @click="changeName">change name</button>
  <p>=========================</p>
  <div>the list is below</div>
  <ul>
    <item v-for="(ele, ind) in listData" :key="ind" :val="ele" />
  </ul>
  <button @click="delFirstEle">删除第一项</button>
</template>

<script setup>
import { ref } from "vue";
import Item from "./item.vue";

const name = ref("old name");
const changeName = () => {
  name.value = "new name ~~~~~";
};

const listData = ref(["item111", "item222", "item333"]);
const delFirstEle = () => listData.value.shift();
</script>
<style lang="scss" scoped></style>
