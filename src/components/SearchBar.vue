<template>
  <div class="w-full bg-white rounded-lg mb-10 flex flex-col items-start shadow-[5px_5px_10px_rgba(0,0,0,0.2)]">
    <div class="search-items">


    <div class=" w-full left-0 right-auto flex justify-between items-center gap-5">
      <div class="text-left">
        <h4 class="text-3xl font-bold">Pizzeria</h4>
        <p class="italic">Quick and Tasty </p>
      </div>
      <div class="flex gap-2">
        <div class="flex items-center border-gray-300 border-b text-lg">
          <input @keydown.enter="searchItem" placeholder="Search" class="left-0 px-5 py-2.5 outline-none w-full" type="text" v-model="search">
          <i @click="searchItem" class='bx bx-search'></i>
        </div>

        <div class="background-violet rounded-2xl cursor-pointer select-none" @click="cartItemStore.toggleCart()">
          <div class="py-3 px-5 flex items-center text-2xl">
            <i class='bx bx-cart'></i>
            <span v-if="numberOfItems>0">{{numberOfItems}}</span>
          </div>
        </div>

      </div>


    </div>
    <div class="flex m-item p-0 mt-5 text-left w-full items-center text-2xl">
      <span class="font-bold mr-2">Filter:</span>
      <select v-model="selectedItem" @change="foodItemStore.changeSelectedItem(selectedItem)" class="outline-none text-center text-3xl outline-none border-b-2 border-l-0 background-violet p-2 rounded-2xl">
        <option value="Pizza">Pizza</option>
        <option value="Dish">Dish</option>
        <option value="Soup">Soup</option>
        <option value="Salad">Salad</option>
      </select>
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
import SelectItem from "@/types/SelectItem";

export default {
  name: "SearchBar",
  setup(){
    const search = ref<string>('')
    const foodItemStore = useFoodItemsStore()
    const cartItemStore= useCartItemsStore()
    const orderItemStore = useOrderItemsStore()

    const {selectedItem} = storeToRefs(foodItemStore)
    // return {currentItem,store}


    const {numberOfItems} = storeToRefs(orderItemStore)


    const searchItem = () =>{
      foodItemStore.searchFood(search.value)
      search.value = ''
    }

    return {search,searchItem, cartItemStore, numberOfItems,selectedItem,foodItemStore}
  }
}
</script>

<style scoped>

</style>