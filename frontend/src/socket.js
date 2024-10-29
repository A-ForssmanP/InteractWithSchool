import {io} from "socket.io-client"

const URL = process.env.NODE_ENV === 'production' ? "https://interactwithschool.onrender.com" : `${import.meta.env.VITE_SOCKET_SERVER}`
console.log(URL)
console.log(import.meta.env.VITE_SOCKET_SERVER)
export const socket = io(URL,{
    autoConnect:false,
    withCredentials:true
})