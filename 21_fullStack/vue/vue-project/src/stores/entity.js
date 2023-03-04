import { defineStore } from 'pinia'
import myLocalStorage from "@/stores/service/myLocalStorage";
import myFetch from "@/stores/service/myFetch";

export const useEntityStore = defineStore('entity',{
    state: () => ({
        isLoaded: false,
        entities: []
    }),
    actions: {
        loadFromServer() {
            this.isLoaded = false

            // if(myLocalStorage.getItem('entities') ) {
            //     toast.info('Get from Cache')
            //     this.entities = myLocalStorage.getItem('entities')
            //     this.isLoaded = true
            //     return
            // }

            myFetch.fetch('/entity')
                .then(data => {
                            this.entities = data
                            this.isLoaded = true
                            myLocalStorage.setItem('entities', JSON.stringify(data))
                })

            // fetch('http://localhost/api/entity')
            //     .then(res => res.json())
            //     .then(data => {
            //         toast.info('Get from Server')
            //         this.entities = data
            //         this.isLoaded = true
            //         myLocalStorage.setItem('entities', JSON.stringify(data))
            //     })
            //     .catch(err => {
            //         toast.error(err.message)
            //         console.log('Err')
            //     })
        }
    }
})
