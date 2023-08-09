<template>
  <div class=" px-5 py-2.5">
    <div class="border-b-2 border-gray-300 justify-between flex py-5 items-center gap-2">

      <div class="flex items-center gap-2">
        <i class='bx bx-trash text-violet-700 text-3xl cursor-pointer' @click="orderItemsStore.removeItemFromStore($props.order.food)"></i>

        <div class="flex-col text-left">
          <div class="font-bold">{{order.food.name}}</div>
          <div class=""> {{order.food.price * order.quantity}} €</div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <div class=" flex justify-center flex items-center ">
          <i class='bx bx-plus  rounded-l  border-2 b py-2 px-1 bg-white border-indigo-700 text-base cursor-pointer' @click="orderItemsStore.changeQuantityOfItem($props.order,true)" ></i>
          <input type="number" min="0" v-model="$props.order.quantity" class="w-[40px] p-2 text-center  border-indigo-700 border-y-2 text-base  w-full h-auto outline-none" />
          <i class='bx bx-minus rounded-r   py-2 px-1 border-2 border-indigo-700 text-base bg-white cursor-pointer' @click="orderItemsStore.changeQuantityOfItem($props.order,false)"  ></i>
        </div>


      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Order from "@/types/Order";
import {useOrderItemsStore} from "@/store/OrderItemsStore";
export default defineComponent({
  name: "OrderItem",
  props: {
    order: {
      required: true,
      type: Object as PropType<Order>
    }
  },
  setup(){
    const orderItemsStore = useOrderItemsStore()
    return {orderItemsStore}
  }

})
</script>

<style scoped>
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>