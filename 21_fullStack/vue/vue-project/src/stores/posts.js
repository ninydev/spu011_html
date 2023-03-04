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

            socket.on('newPost', (data) => {
                toast.info('New Post')
                this.posts.push(data)
            })

            this.isLoaded = false

            myFetch.fetch('/posts')
                .then(data => {
                    this.posts = data
                    this.isLoaded = true
                    // myLocalStorage.setItem('posts', JSON.stringify(data))
                })
        }
    }
})
