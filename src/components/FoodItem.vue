<template>
  <div class="flex flex-col food-item left-item-selected">
    <img class="relative h-3/4" :src="require('@/assets/'+$props.food.image)" :alt="$props.food.name">
    <div class="food-body mt-2 px-5 h-1/4">
      <div class="flex flex-col absolute justify-center ">
        <div class="flex gap-2 text-left align-middle items-center  top-auto">
          <h3 class="text-white text-2xl font-bold">{{$props.food.name}}</h3>
          <span class="text-gray-500 bg-white font-bold shadow-[2px_2px_5px_rgba(255,255,255,0.3)] rounded-lg p-1">{{$props.food.gram}}</span>
        </div>
        <span class="text-left text-2xl rounded-lg">{{$props.food.price}} €</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import FoodItem from "@/types/FoodItem";
import {defineComponent} from "vue";

export default  defineComponent({
  name: "FoodItem",
  props: {
    food: {
      required: true,
      type: Object as PropType<FoodItem>
    }
  }
})
</script>

<style scoped>
.food-item{
  max-width: 33%;
  flex: 33%;
  min-width: 350px;
  min-height: 300px;
  border-radius: 5px;
  position: relative;
  height: auto;
  overflow: hidden;
}

.food-item img{
  width: 100%;
  top: 0;
  max-height: 300px;
  /*max-height: 250px;*/
  /*height: 100%;*/
  object-fit: contain;
  z-index: 5;
  /*top: -20px;*/
}

.food-body{
  position: relative;
  /*position: absolute;*/
  z-index: 2;
  width: 100%;
  height: 100%;
  /*background: rgba(0,0,0,0.2);*/
}

@media only screen and (max-width: 1280px) {
  .food-item{
    max-width: 100%;
    flex: 50%;}
}


</style>