import {toast} from "vue3-toastify";

export default {

    setItem(name, item, ttl = 360) {
        localStorage.setItem(name, JSON.stringify(item))
        localStorage.setItem(name + '_time', Date.now())
        localStorage.setItem(name + '_ttl', ttl)
    },

    getItem(name){
        if(localStorage.getItem(name)) {
            if(
                Date.now() - localStorage.getItem(name + '_time') <
                localStorage.getItem(name + '_ttl')
            ) {
                localStorage.removeItem(name + '_time')
                localStorage.removeItem(name + '_ttl')
                localStorage.removeItem(name)
            } else {
                try {
                    return JSON.parse(localStorage.getItem(name))
                } catch (ex) {
                    toast.error("Local Storage Error")
                }
            }
        }
        return null
    }
}

