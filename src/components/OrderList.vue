<template>
<div class="overflow-y-auto flex flex-col mb-2">
<!--  <p>{{// orders}}</p>-->
  <OrderItem v-for="order in orders" :order="order" :key="order.food.id"></OrderItem>
</div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
import {useOrderItemsStore} from "@/store/OrderItemsStore";
import {storeToRefs} from "pinia";
import {computed, watch} from "vue";

export default {
  name: "OrderList",
  components: {OrderItem},
  setup(){
    const orderItemStore = useOrderItemsStore()
    const {orders} = storeToRefs(orderItemStore)
    return {orders}
  },

}
</script>

<style scoped>

</style>