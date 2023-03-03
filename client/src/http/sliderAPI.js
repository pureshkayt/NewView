import {$authHost, $host} from "./index";

export const createSlide = async (slider) => {
    const {data} = await $authHost.post('api/slider', slider)
    return data
}

export const fetchSlide = async () => {
    const {data} = await $host.get('api/slider')
    return data
}
export const deleteSlide = async (id) => {
    const {data} = await $authHost.delete('api/slider/' + id)
    return data
}