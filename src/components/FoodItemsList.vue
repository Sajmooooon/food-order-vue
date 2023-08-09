<template>
  <div class="flex flex-wrap gap-2">
    <div v-if="errorMessage">
      {{errorMessage}}
    </div>
    <transition-group v-else name="foodItems">
      <FoodItem v-for="food in foodListLoaded" :food="food" :key="food.id">

      </FoodItem>
    </transition-group>
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
    const {foodListLoaded,errorMessage} = storeToRefs(store)
    return {foodListLoaded,errorMessage}
  }
}
</script>

<style scoped>
.foodItems-enter-active, .foodItems-left-active{
  transition: transform 0.5s;
}
.foodItems-leave-to, .foodItems-enter-from{
  transform: scale(0);
}
</style>