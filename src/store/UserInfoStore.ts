import {defineStore} from "pinia";

export const useUserInfoStore = defineStore('userInfoStore',{
    state: ()=>({
        loginUser: true
    }),

    actions: {
        logoutUser(){
            this.loginUser = false
            console.log(this.loginUser)

        }
    }

})