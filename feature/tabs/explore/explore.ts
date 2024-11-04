import { client } from "../axios"

export const getListImages = async (page: number, limit: number) => {
    const response = await client.get("v2/list" + `?page=` + page + `&limit=` + limit)
    return response.data
}


export const getSingleImage = async () => {
    const response = await client.get("200/300.jpg")
    return response.data
}