import axios from "axios"

const baseUrl = 'http://admin.sports.com.kg/api/'

export const getFetcher = async (request) => {
    const data = await axios.get(`${baseUrl}${request}`)
    return await data.data
}