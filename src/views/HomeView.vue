<template>
  <div class="h-screen w-full flex flex-row" >
    <SideNavLeft></SideNavLeft>
    <div class="pl-[120px]">
      <div class="p-10">
          <FoodItemsList></FoodItemsList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideNavLeft from "@/components/SideNavLeft.vue";
import FoodItemsList from "@/components/FoodItemsList.vue";

@Options({
  components: {
    FoodItemsList,
    SideNavLeft
  },
})
export default class HomeView extends Vue {}
</script>
