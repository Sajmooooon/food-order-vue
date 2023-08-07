import {defineStore} from "pinia";
import FoodItem from "@/types/FoodItem";
import LeftItem from "@/types/LeftItem";

export const useFoodItemsStore = defineStore('foodItemsStore',{
    state: ()=>({
        foodList: [] as FoodItem[],
        sortedFood: [] as FoodItem[],
        errorMessage: null as string | null,
        selectedItem: 'Pizza',
        items: [
            {title: 'Pizza', icon: "bx bx-bowl-hot", id: 1},
            {title: 'Dish', icon: "bx bx-bowl-rice", id: 2},
            {title: 'Soup', icon: "bx bx-bowl-hot", id: 3},
            {title: 'Salad', icon: "bx bx-bowl-hot", id: 4},

        ] as LeftItem[]
    }),

    actions: {
       async loadFoodList(){
           try {
               const data = await fetch('http://localhost:3000/food')
               if (!data.ok){
                   throw Error('no data available')
               }
               this.foodList = await data.json()

               this.sortFood()

           }
           catch (err: any){
               this.errorMessage = err.message
               console.log(this.errorMessage)
           }

       },


        sortFood(){
            this.sortedFood = this.foodList.filter(food=> food.type == this.selectedItem)

        },

        changeSelectedItem(newValue: string){
            this.selectedItem = newValue
            this.sortFood()
            console.log(this.sortedFood)
        }
    }
})