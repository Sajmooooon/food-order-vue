<template>
  <div :class="{'showing': showCart}" class="side-nav-right">
    <UserDetail></UserDetail>
  </div>
</template>

<script lang="ts">
import {useCartItemsStore} from "@/store/CartItemsStore";
import {storeToRefs} from "pinia/dist/pinia";
import {defineComponent} from "vue";
import UserDetail from "@/components/UserDetail.vue";

export default defineComponent(
    {
      name: "SideNavRight",
      components: {UserDetail},
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
  background: white;
}

.showing{
  width: 350px;
}

</style>