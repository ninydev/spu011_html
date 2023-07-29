import { defineStore } from 'pinia'
import myFetch from "@/stores/service/myFetch";
import myLocalStorage from "@/stores/service/myLocalStorage";
import socket from "@/stores/service/mySocketIo"
import {toast} from "vue3-toastify";

export const usePostStore = defineStore('post', {
    state: () => ({
        isLoaded: false,
        posts: []
    }),
    actions: {
        loadFromServer() {

            this.isLoaded = false

            if (myLocalStorage("posts").getItem("posts")) {
                this.posts = myLocalStorage.getItem("posts")
                this.isLoaded = true
            }

            myFetch.fetch('/posts')
                .then(data => {
                    this.posts = data
                    myLocalStorage.setItem(data)
                    this.isLoaded = true
                    // myLocalStorage.setItem('posts', JSON.stringify(data))
                })
        }
    }
})
