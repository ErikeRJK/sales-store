import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4505"
})

export default instance