import {defineStore} from "pinia";

export const useCartItemsStore = defineStore('cartItemStore',{
    state:()=>({
        showCart: false as boolean,
    }),

    actions: {
       toggleCart(){
           this.showCart = !this.showCart
       }
    }
})