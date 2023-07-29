import {toast} from "vue3-toastify";

export default {
    fetch(url, options = null) {
        return new Promise((resole,reject) => {
            if (options === null) {
                options = {}
            }

            url = 'http://localhost:3000/api' + url

            console.log('+ Fetch +')
            console.log(url)

            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    toast.info('Get from Server in my service')
                    console.log(data)
                    resole(data)
                })
                .catch(err => {
                    toast.error("error in Fetch")
                    reject(err)
                })
            })
    }
}
