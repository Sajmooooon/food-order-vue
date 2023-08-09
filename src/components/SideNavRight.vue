<template>
  <div :class="{'showing': showCart}" class="side-nav-right flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.5)]">
<!--    <div class="flex-col flex gap-2 h-full">-->
      <UserDetail class="flex-0.5"></UserDetail>
      <OrderList class="flex-1"></OrderList>
<!--    </div>-->
    <OrderDetails class="flex-0.5"></OrderDetails>
  </div>
</template>

<script lang="ts">
import {useCartItemsStore} from "@/store/CartItemsStore";
import {storeToRefs} from "pinia/dist/pinia";
import {defineComponent} from "vue";
import UserDetail from "@/components/UserDetail.vue";
import OrderList from "@/components/OrderList.vue";
import OrderDetails from "@/components/OrderDetails.vue";

export default defineComponent(
    {
      name: "SideNavRight",
      components: {OrderDetails, OrderList, UserDetail},
      setup(){
        const cartItemStore = useCartItemsStore()
        const {showCart} = storeToRefs(cartItemStore)
        return {showCart}
      }
    }
)
</script>

<style scoped>
.side-nav-right{
  float: right;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  width: 0;
  bottom: 0;
  transition: all 0.2s;
  background: #f8f4f4;
}

.showing{
  width: 350px;
}

</style>