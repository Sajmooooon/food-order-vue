<template>

    <div class="rounded-b-2xl w-full left-item-selected p-5 flex justify-between items-center text-xl shadow-[5px_5px_10px_rgba(0,0,0,0.5)]">
        <div @click="cartItemStore.toggleCart()" class="cursor-pointer">
          <i class='bx bx-x-circle text-4xl'></i>
        </div>
        <div>
          <div v-if="!loginUser">
            <span>Login</span> |
            <span>Register</span>
          </div>
          <div v-else>
            <div class="flex gap-2">
              <img src="../assets/logo.png" class="rounded-2xl h-[40px] " >
              <i class='bx bx-log-in text-4xl' @click="userInfoStore.logoutUser()"></i>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import {useCartItemsStore} from "@/store/CartItemsStore";
import {useUserInfoStore} from "@/store/UserInfoStore";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "UserDetail",
  setup(){

    const userInfoStore = useUserInfoStore()
    const cartItemStore = useCartItemsStore()
    const {loginUser} = storeToRefs(userInfoStore)


    return {cartItemStore,userInfoStore,loginUser}


  }
}
</script>

<style scoped>

</style>