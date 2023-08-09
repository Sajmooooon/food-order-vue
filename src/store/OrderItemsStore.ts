import {defineStore} from "pinia";
import Order from "@/types/Order";
import FoodItem from "@/types/FoodItem";

export const useOrderItemsStore = defineStore('orderItemsStore',{
    state: () =>({
        orders: [] as Order[]
    }),



    actions: {
        addItemToStore(food: FoodItem){
            console.log(food)
            const orderItemUpdate = this.orders.find(item=>item.food.id === food.id)
            if(orderItemUpdate){
                orderItemUpdate.quantity++
            }
            else{
                this.orders.push({food: food, quantity: 1})
            }
            console.log(this.orders)
        },
        removeItemFromStore(food:FoodItem){
            this.orders = this.orders.filter(item=> item.food.id!=food.id)
        },

        // increaseItemInStore(food: FoodItem){
        //
        // }

    }
})