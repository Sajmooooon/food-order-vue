<template>
  <button v-if="numberOfItems>numberOfLoadedItems" @click="foodItemsStore.loadMoreItems()" class="background-violet p-5
   text-2xl rounded-2xl w-fit my-5 shadow-[10px_5px_5px_rgba(0,0,0,0.3)] hover:scale-110 transition-all ease-in-out delay-300">Load More</button>
</template>

<script lang="ts">
import {useFoodItemsStore} from "@/store/FoodItemsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "LoadItemsButton",
  setup(){
    const foodItemsStore = useFoodItemsStore()
    const {numberOfItems,numberOfLoadedItems} = storeToRefs(foodItemsStore)
    return {foodItemsStore, numberOfItems,numberOfLoadedItems}
  }
}
</script>

<style scoped>

</style>