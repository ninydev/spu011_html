import {io} from "socket.io-client"
import {toast} from "vue3-toastify"
import myLog from "@/stores/service/myLog";

let socket = io('http://localhost:3000')

socket.on ('connect', () => {
    myLog('Connect')
    toast.info('Socket Connect')
})

socket.on ('error', () => {
    myLog('Error')
    toast.error('Socket Error')
})

myLog('Socket Start')

export default socket
