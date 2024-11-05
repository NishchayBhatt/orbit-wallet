import { client } from "@/data/axios"

export const infiniteImages = async (props: { pageParam: number }) => {
    const response = await client.get(`v2/list?page=${props.pageParam + 1}&limit=30`)
    return response.data
}