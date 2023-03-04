import {io} from "socket.io-client"
import {toast} from "vue3-toastify"

let socket = io('http://localhost:3000')

socket.on ('connect', () => {
    console.log('Connect')
    toast.info('Socket Connect')
})

socket.on ('error', () => {
    console.log('Error')
    toast.error('Socket Error')
})

console.log('Socket Start')

export default socket
