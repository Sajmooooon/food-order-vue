<template>

    <div class="rounded-b-2xl w-full background-violet p-5 flex justify-between items-center text-xl shadow-[5px_5px_10px_rgba(0,0,0,0.5)]">
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
              <div class="relative">
                <img src="../assets/logo.png" class="rounded-2xl h-[40px] " >
                <div class="w-2 h-2 bg-green-600 rounded-full absolute right-0 z-2 bottom-0 border-1 border-gray-300"></div>
              </div>
              <i class='bx bx-log-in text-4xl cursor-pointer' @click="userInfoStore.logoutUser()"></i>
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