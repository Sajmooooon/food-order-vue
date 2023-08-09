import {defineStore} from "pinia";
import FoodItem from "@/types/FoodItem";
import LeftItem from "@/types/LeftItem";
import SelectItem from "@/types/SelectItem";

export const useFoodItemsStore = defineStore('foodItemsStore',{
    state: ()=>({
        foodList: [] as FoodItem[],
        sortedFood: [] as FoodItem[],
        errorMessage: null as string | null,
        selectedItem: 'Pizza' as SelectItem,
        items: [
            {title: 'Pizza', icon: "bx bxs-pizza", id: 1},
            {title: 'Dish', icon: "bx bx-dish", id: 2},
            {title: 'Soup', icon: "bx bx-bowl-hot", id: 3},
            {title: 'Salad', icon: "bx bx-bowl-rice", id: 4},

        ] as LeftItem[],
        numberOfLoadedItems: 6 as number
    }),

    getters: {
        foodListLoaded: (state) =>{
            return state.sortedFood.slice(0, state.numberOfLoadedItems)
        },
        numberOfItems: (state) =>{
            return state.sortedFood.length
        }
    },

    actions: {
        loadMoreItems(){
          this.numberOfLoadedItems +=3
        },

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

        changeSelectedItem(newValue: SelectItem){
            this.selectedItem = newValue
            this.numberOfLoadedItems = 6
            this.sortFood()
        },

        searchFood(searchedFood: string){
          this.sortedFood = this.foodList.filter(food=> food.name.toLowerCase().includes(searchedFood.toLowerCase()) || food.type.toLowerCase().includes(searchedFood.toLowerCase()))
            this.selectedItem = null
        }
    }
})