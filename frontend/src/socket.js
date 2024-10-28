import {io} from "socket.io-client"

const URL = process.env.NODE_ENV === 'production' ? undefined : `${import.meta.env.VITE_SOCKET_SERVER}`

export const socket = io(URL,{
    autoConnect:false,
    withCredentials:true
})