import {defineStore} from "pinia";
import User from "@/types/User";

export const useUserInfoStore = defineStore('userInfoStore',{
    state: ()=>({
        loginUser: true,
        user: {
            name: 'Jozko',
            lastName: 'Mrkvicka',
            city: 'Bratislava',
            street: 'Bernolakova',
            psc: 556565,
            phone: '+4218984565645'} as User
    }),

    actions: {
        logoutUser(){
            this.loginUser = false
            console.log(this.loginUser)

        },

        updateUser(newUser: User ){
            this.user = newUser
            console.log(this.user)
        }
    }

})