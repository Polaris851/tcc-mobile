import axios from "axios"

export const api = axios.create({
    baseURL: "http://192.168.5.101:3333"
})