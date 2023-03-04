export default {

    setItem(name, item, ttl = 360) {
        console.log(item)
        localStorage.setItem(name, JSON.stringify(item))
    },

    getItem(name){
        return JSON.parse(localStorage.getItem(name))
    }
}

