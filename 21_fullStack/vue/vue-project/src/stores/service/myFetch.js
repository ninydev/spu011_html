import {toast} from "vue3-toastify";

export default {
    fetch(url, options = null) {
        return new Promise((resole,reject) => {
            if (options === null) {
                options = {}
            }
            options.authorization = "key"
            url+= "?key=333"
            fetch(url, options)
                .then(res => res.json())
                .then(data => {
                    toast.info('Get from Server in my service')
                    resole(data)
                })
                .catch(err => {
                    toast.error(err.message)
                    reject(err)
                })
            })
    }
}
