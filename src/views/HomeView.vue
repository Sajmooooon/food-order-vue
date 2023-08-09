<template>
  <div class="h-screen w-full flex flex-row" >
    <SideNavLeft></SideNavLeft>
    <div class="pl-[120px] w-full">
      <div class="p-10">
          <SearchBar></SearchBar>
          <FoodItemsList></FoodItemsList>
          <LoadItemsButton></LoadItemsButton>

      </div>

    </div>
    <SideNavRight></SideNavRight>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideNavLeft from "@/components/SideNavLeft.vue";
import FoodItemsList from "@/components/FoodItemsList.vue";
import SearchBar from "@/components/SearchBar.vue";
import SideNavRight from "@/components/SideNavRight.vue";
import LoadItemsButton from "@/components/LoadItemsButton.vue";

@Options({
  components: {
    LoadItemsButton,
    SideNavRight,
    SearchBar,
    FoodItemsList,
    SideNavLeft
  },
})
export default class HomeView extends Vue {}
</script>
