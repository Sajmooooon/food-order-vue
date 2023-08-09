import {defineStore} from "pinia";
import Order from "@/types/Order";
import FoodItem from "@/types/FoodItem";

export const useOrderItemsStore = defineStore('orderItemsStore',{
    state: () =>({
        orders: [] as Order[],
        total: 0 as number,
        countOfItems: 0 as number
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

        changeQuantityOfItem(order: Order,increase: boolean){
            const orderItemUpdate = this.orders.find(item=>item.food.id === order.food.id)
            if(orderItemUpdate){
                if (increase){
                    orderItemUpdate.quantity++
                }
                else {
                    orderItemUpdate.quantity--
                    this.checkQuantity(order)
                }
            }
        },

        checkQuantity(order: Order){
          if(order.quantity <1){
              this.removeItemFromStore(order.food)
          }
        }

    }
})