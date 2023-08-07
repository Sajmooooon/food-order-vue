<template>
  <div class="h-screen w-full flex flex-row" >
    <SideNavLeft></SideNavLeft>
    <div class="pl-[120px] w-full">
      <div class="p-10">
          <SearchBar></SearchBar>
          <FoodItemsList></FoodItemsList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideNavLeft from "@/components/SideNavLeft.vue";
import FoodItemsList from "@/components/FoodItemsList.vue";
import SearchBar from "@/components/SearchBar.vue";

@Options({
  components: {
    SearchBar,
    FoodItemsList,
    SideNavLeft
  },
})
export default class HomeView extends Vue {}
</script>
