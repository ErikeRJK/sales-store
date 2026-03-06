import instance from "@/services/api"


interface RequestApiProps {
    url: string
    method: "GET" | "POST" | "PUT" | "DELETE"
    data?: object
}

export default async function requestApi({url, method, data = {}}: RequestApiProps){
    return await instance({url, method, data})
}