<template>
<div class="bg-white bottom-0 rounded-t-2xl shadow-[5px_-5px_10px_rgba(0,0,0,0.5)]">
  <div class="p-2.5">

      <form @submit.prevent="updateUserDetails()" class="px-2 text-xl w-full">
        <div class="flex justify-between mb-1">
          <span class="text-2xl font-bold">Order Details:</span>
          <button type="button" name="edit" @click="toggleEdit" class="text-violet-700 ml-auto mr-0">{{editAddress ? 'Save' :'Edit'}}</button>
        </div>

        <div class="flex justify-between gap-2 py-2">
          <label>City: </label>
          <input type="text" class="outline-none  w-2/3" :class="{'input-right':!editAddress, 'editable-input': editAddress}" v-model="user.city" required :readonly="!editAddress">
        </div>

        <div class="flex justify-between gap-2 py-2">
          <label>Address: </label>
          <input type="text" class="outline-none w-2/3" :class="{'input-right':!editAddress, 'editable-input': editAddress}" v-model="user.street" required :readonly="!editAddress">
        </div>

        <div class="flex justify-between gap-2 py-2">
          <label>Psc: </label>
          <input type="text" class="outline-none w-2/3" :class="{'input-right':!editAddress, 'editable-input': editAddress}" v-model.number="user.psc" required :readonly="!editAddress">
        </div>

        <div class="flex justify-between gap-2 py-2">
          <label>Phone: </label>
          <input type="text" class="outline-none w-2/3" :class="{'input-right':!editAddress, 'editable-input': editAddress}" v-model="user.phone" required :readonly="!editAddress">
        </div>

        <div class="flex flex-row justify-between items-center w-full my-3 border-gray-300 border-t">
          <span class="text-2xl font-bold">Total:</span>
          <span class="text-3xl text-violet-700 text-right py-2">150 €</span>
        </div>

        <button name="submit" type="submit" class="left-item-selected text-3xl py-2 px-5 rounded-2xl">Checkout</button>
      </form>
  </div>
</div>
</template>

<script>
import {useUserInfoStore} from "@/store/UserInfoStore";
import {defineComponent, ref, watch, watchEffect} from "vue";
import {storeToRefs} from "pinia/dist/pinia";
export default defineComponent({

  name: "OrderDetails",
  setup(){
    const userInfoStore = useUserInfoStore()
    const {user} = storeToRefs(userInfoStore)
    const editAddress = ref(false)

    const updateUserDetails = () =>{
      console.log('submit')
    }

    const toggleEdit = () =>{
      editAddress.value = !editAddress.value
      if (editAddress.value===false){
        if (user){
          userInfoStore.updateUser(user.value)
        }
      }
    }

    return {editAddress, user, updateUserDetails,toggleEdit}
  },

})
</script>

<style scoped>
.input-right{
  text-align: right;
  border-bottom: 1px solid transparent;
}

.editable-input{
  border-bottom: 1px solid rgb(209 213 219);;
}
</style>