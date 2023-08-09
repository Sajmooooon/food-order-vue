<template>
  <div class="fixed pc-item">
    <div class="bg-white w-[120px] shadow shadow-lg left-0 flex flex-col h-screen z-40 items-center h-screen relative items-center">
      <img src='../assets/logo.png' class="my-10 w-2/3 h-auto" >
      <SideNavLeftItem v-for="item in items" :key="item.id" :item="item" :selected="selectedItem==item.title" ></SideNavLeftItem>
    </div>
  </div>
</template>

<script lang="ts">
import SideNavLeftItem from "@/components/SideNavLeftItem.vue";
import {useFoodItemsStore} from "@/store/FoodItemsStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "SideNavLeft",
  components: {SideNavLeftItem},
  setup(){

    const store = useFoodItemsStore()

    const {selectedItem, items} = storeToRefs(store)

    return {items,selectedItem}
  }
}
</script>

<style scoped>

</style>