<template>
  <div class="w-full bg-white rounded-lg mb-10 flex items-start shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
    <div class="p-10 w-full left-0 right-auto flex justify-between items-center gap-5">
      <div class="text-left">
        <h4 class="text-3xl font-bold">Pizzeria</h4>
        <p class="italic">Quick and Tasty </p>
      </div>
      <div class="flex gap-2">
        <div class="flex items-center border-gray-300 border-b text-lg">
          <input @keydown.enter="searchItem" placeholder="Search" class="left-0 px-5 py-2.5 outline-none w-full" type="text" v-model="search">
          <i @click="searchItem" class='bx bx-search'></i>
        </div>

        <div class="left-item-selected rounded-2xl cursor-pointer select-none" @click="cartItemStore.toggleCart()">
          <div class="py-3 px-5 text-2xl">
            <i class='bx bx-cart'></i>
            <span v-if="numberOfItems>0">{{numberOfItems}}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import {useFoodItemsStore} from "@/store/FoodItemsStore";
import {useCartItemsStore} from "@/store/CartItemsStore";
import {useOrderItemsStore} from "@/store/OrderItemsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "SearchBar",
  setup(){
    const search = ref<string>('')
    const foodItemStore = useFoodItemsStore()
    const cartItemStore= useCartItemsStore()
    const orderItemStore = useOrderItemsStore()

    const {numberOfItems} = storeToRefs(orderItemStore)


    const searchItem = () =>{
      foodItemStore.searchFood(search.value)
      search.value = ''
    }

    return {search,searchItem, cartItemStore, numberOfItems}
  }
}
</script>

<style scoped>

</style>