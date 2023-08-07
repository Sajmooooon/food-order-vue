<template>
  <div class="w-full bg-white rounded-lg mb-10 flex items-start">
    <div class="p-10 w-full left-0 right-auto flex justify-between items-center gap-5">
      <div class="text-left">
        <h4 class="text-3xl font-bold">Pizzeria</h4>
        <p class="italic">Quick and Tasty </p>
      </div>
      <div class="flex items-center border-gray-300 border-b text-lg">
        <input @keydown.enter="searchItem" placeholder="Search" class="left-0 px-5 py-2.5 outline-none" type="text" v-model="search">
        <i @click="searchItem" class='bx bx-search'></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import {useFoodItemsStore} from "@/store/FoodItemsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "SearchBar",
  setup(){
    const search = ref<string>('')
    const store = useFoodItemsStore()

    const searchItem = () =>{
      console.log(search.value)
      store.searchFood(search.value)
      search.value = ''
    }

    return {search,searchItem}
  }
}
</script>

<style scoped>

</style>