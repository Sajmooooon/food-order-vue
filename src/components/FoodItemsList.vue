<template>
  <div class="flex flex-wrap gap-2">
    <div v-if="errorMessage">
      {{errorMessage}}
    </div>
    <FoodItem v-else v-for="food in sortedFood" :food="food" :key="food.id">

    </FoodItem>
  </div>
</template>

<script>
import {useFoodItemsStore} from "@/store/FoodItemsStore";
import {storeToRefs} from "pinia/dist/pinia";
import FoodItem from "@/components/FoodItem";

export default {
  name: "FoodItemsList",
  components: {FoodItem},
  setup(){
    const store = useFoodItemsStore()
    store.loadFoodList()
    const {sortedFood,errorMessage} = storeToRefs(store)
    return {sortedFood,errorMessage}
  }
}
</script>

<style scoped>

</style>