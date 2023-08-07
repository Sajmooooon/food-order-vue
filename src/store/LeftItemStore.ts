import {defineStore} from "pinia";
import LeftItem from "@/types/LeftItem";

export const useLeftItemStore = defineStore('leftItemStore',{
    state:()=>({
        selectedItem: 'Dish',
        items: [
            {title: 'Dish', icon: "bx bx-bowl-rice", id: 1},
            {title: 'Soup', icon: "bx bx-bowl-hot", id: 2},
            {title: 'Salad', icon: "bx bx-bowl-hot", id: 3},
            {title: 'Pizza', icon: "bx bx-bowl-hot", id: 4},
        ] as LeftItem[]
    }),

    actions: {
       changeSelectedItem(newValue: string){
           this.selectedItem = newValue
       }
    }
})

