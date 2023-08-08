<template>
<div class="overflow-y-scroll flex flex-col mb-2">
  <OrderItem v-for="i in arr" :key="i"></OrderItem>
</div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
export default {
  name: "OrderList",
  components: {OrderItem},
  data(){
    return{
      arr: [1,2,3,4,5,6]
    }
  }
}
</script>

<style scoped>

</style>